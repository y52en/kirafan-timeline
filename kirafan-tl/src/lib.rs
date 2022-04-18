use serde_json::{json};
use wasm_bindgen::prelude::*;

#[derive(Debug)]
struct LexicallyAnalyzed {
  r#type: LexicallyAnalyzeStr,
  value: String,
  addtional_info: AddtionalInfo,
}

#[derive(Debug)]
#[allow(non_camel_case_types)]
struct AddtionalInfo {
  r#where: (usize, usize),
}

#[derive(PartialEq, Debug)]
#[allow(non_camel_case_types)]
enum LexicallyAnalyzeStr {
  comma,
  comment,
  new_line,
  braceL,
  braceR,
  bracketL,
  bracketR,
  angle_bracketL,
  angle_bracketR,
  asterisk,
  reserved,
  word,
  equal,
  space = 999,
}

#[wasm_bindgen]
pub fn parse(s: String) -> Result<String, String> {
  convert_la_to_json(_parse(s))
}

fn _parse(s: String) -> Vec<LexicallyAnalyzed> {
  let mut parsed_data: Vec<LexicallyAnalyzed> = Vec::new();

  let chars = s.chars().collect::<Vec<char>>();
  let s_len = chars.len();
  let mut i = 0;
  while i < s_len {
    let mut position = (i , i + 1);
    let value_chr = chars.get(i).unwrap();
    let mut value = value_chr.to_string();
    let chr_type = get_char_type(*value_chr);

    match chr_type {
      LexicallyAnalyzeStr::space => {
        i += 1;
        continue;
      }
      LexicallyAnalyzeStr::comment => {
        value = String::new();
        while i < s_len {
          let value_chr = chars.get(i).unwrap();
          let chr_type = get_char_type(*value_chr);
          if chr_type == LexicallyAnalyzeStr::new_line {
            i -= 1;
            break;
          }
          value.push(*value_chr);
          i += 1;
        }
      }
      LexicallyAnalyzeStr::word => {
        value = String::new();
        while i < s_len {
          let value_chr = chars.get(i).unwrap();
          let chr_type = get_char_type(*value_chr);
          if chr_type != LexicallyAnalyzeStr::word {
            i -= 1;
            break;
          }
          value.push(*value_chr);
          i += 1;
        }
      }
      _ => (),
    }

    position.1 = i + 1;
    parsed_data.push(LexicallyAnalyzed {
      r#type: chr_type,
      value: value,
      addtional_info: AddtionalInfo { r#where: position },
    });
    i += 1;
  }
  return parsed_data;
}

fn get_char_type(s: char) -> LexicallyAnalyzeStr {
  match s {
    ',' => LexicallyAnalyzeStr::comma,
    '\n' => LexicallyAnalyzeStr::new_line,
    n if n.is_whitespace() => LexicallyAnalyzeStr::space,
    '#' => LexicallyAnalyzeStr::comment,
    '{' => LexicallyAnalyzeStr::braceL,
    '}' => LexicallyAnalyzeStr::braceR,
    '[' => LexicallyAnalyzeStr::bracketL,
    ']' => LexicallyAnalyzeStr::bracketR,
    '<' => LexicallyAnalyzeStr::angle_bracketL,
    '>' => LexicallyAnalyzeStr::angle_bracketR,
    '*' => LexicallyAnalyzeStr::asterisk,
    '=' => LexicallyAnalyzeStr::equal,
    '(' | ')' | '"' | '\'' | '!' | '$' | '%' | '&' | '^' | '~' | '?' | ';' | '`' => {
      LexicallyAnalyzeStr::reserved
    }
    _ => LexicallyAnalyzeStr::word,
  }
}

fn convert_la_to_json(la: Vec<LexicallyAnalyzed>) -> Result<String, String> {
  let mut tojson = Vec::new();

  for elm in la {
    tojson.push(json!({
      "type": elm.r#type as i32,
      "value": elm.value,
      "addtional_info":  {
        "where" : elm.addtional_info.r#where
      },
    }));
  }
  return serde_json::to_string(&tojson).map_err(|e| e.to_string());
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn print() {
    // let result = 2 + 2;
    println!(
      "val:{:#?}",
      parse(
        "set name てｓｔ🍎
#this is comment
mv_ls name [{b+,name,1},4*3,<1.1>,r500,[x,10],p200]#
"
        .to_string()
      )
    );
    return;
  }
}
