
export function  CKEmail(data){
    // 创建邮箱正则来进行邮箱格式校验
  let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/; 
  return !reg.test(data)?true:false
}

export function  CKPass(data){
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,15}$/;// 验证密码 6至15位的字母+数字 
    return !reg.test(data)?true:false
}