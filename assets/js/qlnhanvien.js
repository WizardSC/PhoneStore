const block = document.querySelector('.add');
const addblock = document.querySelector('.btn-save');
const btnadd = document.querySelector('.btn-add-staff');
const closeblock = document.querySelector('.btn-close');
addblock.addEventListener('click',()=>{
    block.classList.add('not');
})
btnadd.addEventListener('click',()=>{
  block.classList.remove('not');
})

closeblock.addEventListener('click',()=>{
  block.classList.add('not');
})

/*----*/
var dataP=[];
function add(){
  var item_id = document.getElementById("id").value;
  var item_name = document.getElementById("name").value;
  var item_ex1 = document.getElementById("ex-select1").value;
  var item_address = document.getElementById("address").value;
  var item_phone = document.getElementById("phone").value;
  var item_birthday = document.getElementById("birthday").value;
  var item_ex2 = document.getElementById("ex-select2").value;
  var item_file = document.getElementById("uploadfile").value;
  var item ={
    Id:item_id,
    Name:item_name,
    Select1: item_ex1,
    Address:item_address,
    Phone:item_phone,
    Bir:item_birthday,
    Select2:item_ex2,
    File:item_file
  }
  
  let index= dataP.findIndex((c)=>c.Id==item.Id);
  if(index>=0){
    dataP.splice(index,1,item)
  }else{
    dataP.push(item)
  }
  render()
  clear();
}
function render(){
  table = `<tr>
              <th>ID</th>
              <th width="150">Họ và tên</th>
              <th>Ảnh</th>
              <th width="300">Địa chỉ</th>
              <th width="140">Ngày sinh</th>
              <th width="100">Giới tính</th>
              <th width="150">SĐT</th>
              <th width="160">Chức vụ</th>
              <th width="100">Tính năng</th>
            </tr>`
  for(let i=0;i<dataP.length;i++){
    table += `<tr>
                <td>${dataP[i].Id}</td>
                <td width="150">${dataP[i].Name}</td>
                <td>${dataP[i].File}</td>
                <td width="300">${dataP[i].Address}</td>
                <td width="140">${dataP[i].Bir}</td>
                <td width="100">${dataP[i].Select1}</td>
                <td width="150">${dataP[i].Phone}</td>
                <td width="160">${dataP[i].Select2}</td>
                <th>
                    <button onclick="deleteItem(${dataP[i].Id})" >Xóa</button>
                    <button onclick="editItem(${dataP[i].Id})">Sửa</button>
                </th>
              </tr>`
  }
  document.getElementById("render").innerHTML= table
}
function clear(){
  document.getElementById("id").value="";
  document.getElementById("name").value="";
  document.getElementById("ex-select1").value="";
  document.getElementById("address").value="";
  document.getElementById("phone").value=0;
  document.getElementById("birthday").value="";
  document.getElementById("ex-select2").value="";
  document.getElementById("uploadfile").value="";
}
function deleteItem(x){
  confirm("Bạn muốn xóa")
  if(confirm(Text)== true){
  for(let i=0;i<dataP.length;i++){
    if(dataP[i].Id==x){
      dataP.splice(i,9)
      render()
      }
    }
  }
}
function editItem(x){
  block.classList.remove('not')
    for(let i=0;i<dataP.length;i++){
      if(dataP[i].Id==x){
        document.getElementById("id").value=dataP[i].Id;
        document.getElementById("name").value=dataP[i].Name;
        document.getElementById("ex-select1").value=dataP[i].Select1;
        document.getElementById("address").value=dataP[i].Address;
        document.getElementById("phone").value=dataP[i].Phone;
        document.getElementById("birthday").value=dataP[i].Bir;
        document.getElementById("ex-select2").value=dataP[i].Select2;
      }
  }
}