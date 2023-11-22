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
var dataSP=[];
function add(){
  var item_id = document.getElementById("id").value;
  var item_name = document.getElementById("name").value;
  var item_sl = document.getElementById("number").value;
  var item_priceS = document.getElementById("address").value;
  var item_priceO = document.getElementById("phone").value;
  var item_ex2 = document.getElementById("ex-select2").value;
  var item_ex3 = document.getElementById("ex-select3").value;
  var item_file = document.getElementById("uploadfile").value;
  var item ={
    Id:item_id,
    Name:item_name,
    File:item_file,
    Number:item_sl,
    priceS:item_priceS,
    PriceO:item_priceO,
    Select2:item_ex2,
    Select3:item_ex3,
  }
  
  let index= dataSP.findIndex((c)=>c.Id==item.Id);
  if(index>=0){
    dataSP.splice(index,1,item)
  }else{
    dataSP.push(item)
  }
  render()
  clear();
}
function render(){
  table = `<tr>
              <th>Mã sản phẩm</th>
              <th width="250">Tên Sản Phẩm</th>
              <th>Ảnh</th>
              <th width="100">Số lượng</th>
              <th width="140">Giá bán</th>
              <th width="100">Giá vốn</th>
              <th width="100">Danh mục</th>
              <th width="210">Nhà cung cấp</th>
              <th width="150">Tính năng</th>
            </tr>`
  for(let i=0;i<dataSP.length;i++){
    table += `<tr>
                <td>${dataSP[i].Id}</td>
                <td width="150">${dataSP[i].Name}</td>
                <td>${dataSP[i].File}</td>
                <td width="300">${dataSP[i].Number}</td>
                <td width="140">${dataSP[i].priceS}</td>
                <td width="100">${dataSP[i].PriceO}</td>
                <td width="150">${dataSP[i].Select2}</td>
                <td width="160">${dataSP[i].Select3}</td>
                <th>
                    <button onclick="deleteItem(${dataSP[i].Id})" >Xóa</button>
                    <button onclick="editItem(${dataSP[i].Id})">Sửa</button>
                </th>
              </tr>`
  }
  document.getElementById("render").innerHTML= table
}
function clear(){
  document.getElementById("id").value="";
  document.getElementById("name").value="";
  document.getElementById("ex-select3").value="";
  document.getElementById("number").value=0;
  document.getElementById("phone").value=0;
  document.getElementById("address").value="";
  document.getElementById("ex-select2").value="";
  document.getElementById("uploadfile").value="";
}
function deleteItem(x){
  confirm("Bạn muốn xóa")
  if(confirm(Text)== true){
  for(let i=0;i<dataSP.length;i++){
    if(dataSP[i].Id==x){
      dataSP.splice(i,9)
      render()
      }
    }
  }
}
function editItem(x){
  block.classList.remove('not')
    for(let i=0;i<dataSP.length;i++){
      if(dataSP[i].Id==x){
        document.getElementById("id").value=dataSP[i].Id;
        document.getElementById("name").value=dataSP[i].Name;
        document.getElementById("ex-select3").value=dataSP[i].Select3;
        document.getElementById("number").value=dataSP[i].Number;
        document.getElementById("phone").value=dataSP[i].PriceO;
        document.getElementById("address").value=dataSP[i].priceS;
        document.getElementById("ex-select2").value=dataSP[i].Select2;
        document.getElementById("uploadfile").value=dataSP[i].File;
      }
  }
}