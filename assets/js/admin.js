// Khi load giao diện sẽ cập nhật thông tin user
const usernameLabel = $('.info__name')

function loadForm() {
    const userID = User.checkLoginId()
    const username = User.getUserID(userID)
    usernameLabel.innerText = username.full_name
}

loadForm()
const contentContainer = $('#content')
const listControlItems = $$('.nav-links__item')

Array.from(listControlItems).forEach((item) => {
    const titleFunc = $('.top-line__heading')
    item.addEventListener('click', () => {

        if (item.getAttribute('data-value') === 'trang-chu') {
            titleFunc.innerText = 'TRANG CHỦ'
            contentContainer.innerHTML =
                `
            <section class="home-section">
                    
                    <div class="home-content">
                        <div class="content-left">
                            <div class="box-content">
                                <div class="box1">
                                    <div class="icon-ad">
                                        <img width="96" height="96"
                                            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-clients-home-based-business-flaticons-lineal-color-flat-icons.png"
                                            alt="external-clients-home-based-business-flaticons-lineal-color-flat-icons" />
                                    </div>
                                    <div class="info">
                                        <h4>Tổng khách hàng</h4>
                                        <p><b>99 khách hàng</b></p>
                                        <p class="info-tong">Tổng khách hàng được quản lý.</p>
                                    </div>
                                </div>
                                <div class="box1">
                                    <div class="icon-ad">
                                        <img
                                            src="data:image/png;base64,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">
                                    </div>
                                    <div class="info">
                                        <h4>Tổng sản phẩm</h4>
                                        <p><b>1000 sản phẩm</b></p>
                                        <p class="info-tong">Tổng số sản phẩm được quản lý.</p>
                                    </div>
                                </div>
                                <div class="box1">
                                    <div class="icon-ad">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADiUlEQVR4nO2Yz0tUURTHz18S1tpWLdS1ucmN/djXIqJaTLOKFjVgC7NOC4OCDNtkVJC0SBM0smBgBBGs8MdEtmiiHzP9msjG1Jm5cR9TcN9ENfPu49y83w8cGJ5yZt7n6zn3OUQAAAAAAAAAAABoAk7vUj4VuYa0EEYA8lIYEyAvhrGC/ChyDWkhjADkpTAmQF4MYwU1LuH0ZJfq6WtVbYmWoPTr1HinNZlx9CfXiCKnI7lV7TiyxSh9rXeiy4r8OPqTazR7Iz19rYGQE0NH1YcvhaCOXzkcXNvdvz1yAHH1J9do9kbaEi2BDC3mJ++L+eBae6IlcgBx9SfXaPZG2muCwtgKIK7+5BpRV0QYfU3/LGoAcfUn12j2RlLjnaojua1OkD4kU+M7IwcQV39yjSiSeie66gTZkB9nf3KNqJLC2JIfV39yDdcEMQJoTNB6uWQEMJDZa03+hcw+o/da+RsmICzpU+m1IWlo9qC1AK7OHjJ6fyy9QgBhSbniU0PS3aUz1gIYzfYbvV8WnyCAsKTp3C1D0mJhyloAS4VHRu9M7gYCCEu6/jhpSNqorKnBmf2RRQ3OHFDlyrrR+9pcAgHUy+pWxdW3hqiF/IPIohYLD42en1ffBO8VtS+5ho1Vce8ZqzCTzy823e/+8qW6fqPZs1bWGrmGjZs6n+5W+ZUXhrBKdaOpELT8SrVs9Hr3dTl4DwTwl0fG7xsrdX+5C/kpdfkfzgR9boTXjkb31L1tyN+0E8C1GplPqWq1UidRH8xa7uhSfyBzILMnKP1aP2rqpx39O2F0r5H5U9Y+36YPgNO71O35k7+dhEZZK5fUnYVeq5/NiwC4to7CZ0Ij6J1vc+14FwDXDuaxLNc9ov4J/ag5lj1n7cD1OgD+Vd1qeC4Z/Mesv7bQ3+esl1eD0q/11wvTuZtqeO6Yled8BJCOO1AEoKQlYgLS8iKxgtL/Z5FrSAthBCAvhTEB8mIYK8iPIteQFsIIQF4KYwLkxTBWkB9FriEthBGAvBTGBMiLYawgP4pcQ1oIIwB5KYwJkBfDWEF+FLmGtBBGAPJSGBMgL4axgvwocg1pIYwA5KUwJkBeDGMF+VHkGtJCGAHIS2FMgLwYxgryo8g1pIUwApCXwpgAeTGMFeRHkWtIC2EEIC+FMQHyYhgryI8i15AWwghAXgpjAuTFMFaQH0UAAAAAAAAAAACgxvkBQeEZRUjseSYAAAAASUVORK5CYII=">
                                    </div>
                                    <div class="info">
                                        <h4>Tổng đơn hàng</h4>
                                        <p><b>350 đơn hàng</b></p>
                                        <p class="info-tong">Tổng số hóa đơn bán hàng trong tháng.</p>
                                    </div>
                                </div>
                                <div class="box1">
                                    <div class="icon-ad">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACtUlEQVR4nO2dz2oUQRCHKwjm4km8eUzw4Cmw6SLgYbV7IkLOe9En0CdIXkCfQJ/AvEEewIP3nAWPuYgIcboEBXFklJw7f2anqqt/H9R9uoqZ3Z2vqpYIAAAAAAAAAAAAAAAAwMRIxweSeDAdHR+4LPywenhbIn9ST3Aqxufh2fYmeUMSHxlI7nC5uyAckid+xL37kkJWT2y6bIQ8XjN5QSIf6yeVrxaR35MH+seLRznxH/WEpqvFeM19t7ukmhlWq1s58ql2MuW6RYh8Op6BaqVPu6+0kyg3jL4LL6lGzp/u3ZXEX7UTKDeNGL71y8U9qg2J/E49eWmqIvBbqgnZDzs5ht/qiUvTxL+z7IcdqoGBaEMif9BOmkx/F3wcz0bWySm8UE9WWtOd0IXnZJkvy+WdnMKZ2wKkcDaekaySI79ZdxJKrL0IMbwmi5w/WWzlyD/9F4B/fU/hAVkjx3Ayx2OgxBzXMJ6VWhUtJZoTN3OLFjMFsCJu5hYtJZoSNxqixVQBtMWNhmgp0Yy40RItJZoQN5qipUQT4kZTtJRwL260RUsJ9+JGW7SUcC1uLIiWEm7FjRXRUsKtuLEiWkpoX99axI0l0VLCpbiZQ7SIowJMKm7mEi3irgATiZu5RIs4K8Bk4gYFYN0C4BHEuo+g/3cBPoRFs3sCX0NZv38IP8RYt4MOryJYv4fUwss4ab2LWvt1tLQ+R6AtZMRqzDlJ42H2S2qeJat9+lE8TFPWOv8rnuaJ0ZjFuhP1aE0M+jsl0JyrDNrTDYABDQNgREkZDOkZAGOqylgSN9LioLYlcSMtriqwJG6k1WUdHsVNrmldjUtxEytb2ORK3MRKV5Z5ETd9rUv7PIibXPvayprFTfawuPUCrC5WBsu7DYD19crgDxwMgL8wAQAAAAAAAAAAAAAAAGqUvyfH1jHCJGfpAAAAAElFTkSuQmCC">
                                    </div>
                                    <div class="info">
                                        <h4>Sắp hết hàng</h4>
                                        <p><b>5 sản phẩm</b></p>
                                        <p class="info-tong">Số sản phẩm cảnh báo hết cần nhập thêm.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="table-tab">
                                <h3 class="title-table">Tình trạng đơn hàng</h3>
                                <div>
                                    <table class="table-border">
                                        <thead>
                                            <tr>
                                                <th>ID đơn hàng</th>
                                                <th>Tên khách hàng</th>
                                                <th>Tổng tiền</th>
                                                <th>Trạng thái</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>MM1001</td>
                                                <td>Nguyễn Ngọc Ngạn</td>
                                                <td>19.990.000 đ</td>
                                                <td>Đã hoàn thành</td>
                                            </tr>
                                            <tr>
                                                <td>MM1001</td>
                                                <td>Nguyễn Ngọc Ngạn</td>
                                                <td>19.990.000 đ</td>
                                                <td>Đã hoàn thành</td>
                                            </tr>
                                            <tr>
                                                <td>MM1001</td>
                                                <td>Nguyễn Ngọc Ngạn</td>
                                                <td>19.990.000 đ</td>
                                                <td>Đã hoàn thành</td>
                                            </tr>
                                            <tr>
                                                <td>MM1001</td>
                                                <td>Nguyễn Ngọc Ngạn</td>
                                                <td>19.990.000 đ</td>
                                                <td>Đã hoàn thành</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="table-tab">
                                <h3 class="title-table">Khách hàng mới</h3>
                                <div>
                                    <table class="table-border">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Tên khách hàng</th>
                                                <th>Ngày sinh</th>
                                                <th>Số điện thoại</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>#111</td>
                                                <td>Nguyễn Ngọc Ngạn</td>
                                                <td>11/11/2000</td>
                                                <td>0909118119</td>
                                            </tr>
                                            <tr>
                                                <td>#111</td>
                                                <td>Nguyễn Ngọc Ngạn</td>
                                                <td>11/11/2000</td>
                                                <td>0909118119</td>
                                            </tr>
                                            <tr>
                                                <td>#111</td>
                                                <td>Nguyễn Ngọc Ngạn</td>
                                                <td>11/11/2000</td>
                                                <td>0909118119</td>
                                            </tr>
                                            <tr>
                                                <td>#111</td>
                                                <td>Nguyễn Ngọc Ngạn</td>
                                                <td>11/11/2000</td>
                                                <td>0909118119</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="content-right">
                            <div class="chart-table">
                                <h3 class="title-table">Dữ liệu 6 tháng đầu vào</h3>
                                <canvas id="myChart" style="width:100%;max-width:650px"></canvas>
                            </div>
                            <div class="chart-table">
                                <h3 class="title-table">Thống kê 6 tháng doanh thu</h3>
                                <canvas id="myChart1" style="width:100%;max-width:650px"></canvas>
                            </div>
                        </div>
                </section>
            `
        }
        if (item.getAttribute('data-value') === 'ql-taikhoan') {
            titleFunc.innerText = 'QUẢN LÝ TÀI KHOẢN'
            contentContainer.innerHTML =
                `
            <div class="row-time">
          <ul class="time-line">
            <li class="title-ad"><a href="#"><b>Quản lý nhân viên</b></a></li>
          </ul>
          <div id="clock"></div>
        </div>
        <div class="btn-add-staffs">
          <a class="btn-add-staff" href="#">
            Tạo mới nhân viên
          </a>
        </div>
        <form class="add">
            <div class="form-info-add">
              <label class="control-label">ID nhân viên</label>
              <input id="id" class="form-info" type="text"  required>
            </div>
            <div class="form-info-add">
              <label class="control-label">Họ và tên</label>
              <input class="form-info" type="text" id="name" required>
            </div>
            <div class="form-info-add">
              <label class="control-label">Địa chỉ email</label>
              <input class="form-info" type="text" id="email" required>
            </div>
            <div class="form-info-add">
              <label class="control-label">Địa chỉ thường trú</label>
              <input class="form-info" type="text" id="address" required>
            </div>
            <div class="form-info-add">
              <label class="control-label">Số điện thoại</label>
              <input class="form-info" type="number" id="phone" required>
            </div>
            <div class="form-info-add">
              <label class="control-label">Ngày sinh</label>
              <input class="form-info" type="date" id="birthday" required>
            </div>
            <div class="form-info-add">
              <label class="control-label">Nơi sinh</label>
              <input class="form-info" type="text" id="born" required>
            </div>
            <div class="form-info-add">
              <label class="control-label">Số CMND/CCCD</label>
              <input class="form-info" type="number" id="cccd" required>
            </div>
            <div class="form-info-add">
              <label class="control-label">Giới tính</label>
              <select  id="ex-select1" class="form-info" required>
                <option>-- Chọn giới tính --</option>
                <option>Nam</option>
                <option>Nữ</option>
              </select>
            </div>
            <div class="form-info-add">
              <label class="control-label">Chức vụ</label>
              <select  id="ex-select2" class="form-info" required>
                <option>-- Chọn chức vụ --</option>
                <option>Bán hàng</option>
                <option>Tư vấn</option>
                <option>Dịch vụ</option>
                <option>Thu Ngân</option>
                <option>Quản kho</option>
                <option>Bảo trì</option>
                <option>Kiểm hàng</option>
                <option>Bảo vệ</option>
                <option>Tạp vụ</option>
              </select>
            </div>
            <div class="form-info-add">
              <label class="control-label">Bằng cấp</label>
              <select  id="ex-select3" class="form-info" required>
                <option>-- Chọn bằng cấp --</option>
                <option>Tốt nghiệp Đại Học</option>
                <option>Tốt nghiệp Cao Đẳng</option>
                <option>Tốt nghiệp Phổ Thông</option>
                <option>Chưa tốt nghiệp</option>
                <option>Không bằng cấp</option>
              </select>
            </div>
            <div class="form-info-add">
              <label class="control-label">Ảnh 3x4</label>
              <div class="myfileupload">
                <img src="" alt="">
                <input type="file" id="uploadfile" name="ImageUpLoad">
              </div>
            </div>
            <div>
              <button onclick="add()" class="btn-save">Lưu</button>
              <button class="btn-close">Hủy</button>
            </div>
        </form>
        <div class="table-sff">
          <table class="table-manage-staffs" id="render">
            <thead>
              <tr>
                <th>ID</th>
                <th width="150">Họ và tên</th>
                <th>Ảnh</th>
                <th width="300">Địa chỉ</th>
                <th width="140">Ngày sinh</th>
                <th width="100">Giới tính</th>
                <th width="150">SĐT</th>
                <th width="160">Chức vụ</th>
                <th width="100">Tính năng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>Hồ Thị Thanh Ngân</td>
                <td><img class="img-card-person" src="/admin/imgadmin/img.jpg" alt=""></td>
                <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh </td>
                <td>12/02/1999</td>
                <td>Nữ</td>
                <td>0926737168</td>
                <td>Bán hàng</td>
                <td class="table-td-center"><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
                    onclick="myFunction(this)"><i class="fas fa-trash-alt"></i>
                  </button>
                  <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp"
                    data-toggle="modal" data-target="#ModalUP"><i class="fas fa-edit"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>102</td>
                <td>Trần Như Ý</td>
                <td><img class="img-card-person" src="/admin/imgadmin/img1.jpg" alt=""></td>
                <td>155-157 Trần Quốc Thảo, Quận 5, Hồ Chí Minh </td>
                <td>12/02/2000</td>
                <td>Nữ</td>
                <td>0926778878</td>
                <td>Bán hàng</td>
                <td class="table-td-center"><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
                    onclick="myFunction(this)"><i class="fas fa-trash-alt"></i>
                  </button>
                  <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp"
                    data-toggle="modal" data-target="#ModalUP"><i class="fas fa-edit"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>103</td>
                <td>Nguyễn Bảo Lộc</td>
                <td><img class="img-card-person" src="/admin/imgadmin/img2.webp" alt=""></td>
                <td>155 Trần Quốc Thảo, Quận 10, Hồ Chí Minh </td>
                <td>1/02/1999</td>
                <td>Nam</td>
                <td>0926737998</td>
                <td>Bán hàng</td>
                <td class="table-td-center"><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
                    onclick="myFunction(this)"><i class="fas fa-trash-alt"></i>
                  </button>
                  <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp"
                    data-toggle="modal" data-target="#ModalUP"><i class="fas fa-edit"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>104</td>
                <td>Trần Thái Thành</td>
                <td><img class="img-card-person" src="/admin/imgadmin/img3.jpg" alt=""></td>
                <td>906 đường 3/2, Quận 11, Hồ Chí Minh </td>
                <td>11/10/1999</td>
                <td>Nam</td>
                <td>0926737168</td>
                <td>Bán hàng</td>
                <td class="table-td-center"><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
                    onclick="myFunction(this)"><i class="fas fa-trash-alt"></i>
                  </button>
                  <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp"
                    data-toggle="modal" data-target="#ModalUP"><i class="fas fa-edit"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>105</td>
                <td>Hồ Văn Hùng</td>
                <td><img class="img-card-person" src="/admin/imgadmin/img4.jpg" alt=""></td>
                <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh </td>
                <td>25/02/1997</td>
                <td>Nam</td>
                <td>0926737168</td>
                <td>Bán hàng</td>
                <td class="table-td-center"><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
                    onclick="myFunction(this)"><i class="fas fa-trash-alt"></i>
                  </button>
                  <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp"
                    data-toggle="modal" data-target="#ModalUP"><i class="fas fa-edit"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
            `
        }
        if (item.getAttribute('data-value') === 'ql-sanpham') {
            titleFunc.innerText = 'QUẢN LÝ SẢN PHẨM'
            contentContainer.innerHTML =
                `
            <div class="staff-manage">
        
        <div class="btn-add-staffs">
          <a class="btn-add-staff" href="#">
            Tạo sản phẩm mới
          </a>
        </div>
        <form class="add">
            <div class="form-info-add">
              <label class="control-label">Mã sản phẩm</label>
              <input id="id" class="form-info" type="text"  required>
            </div>
            <div class="form-info-add">
              <label class="control-label">Tên sản phẩm</label>
              <input class="form-info" type="text" id="name" required>
            </div>
            <div class="form-info-add">
              <label class="control-label">Số lượng</label>
              <input class="form-info" type="number" id="number" required>
            </div>
            <div class="form-info-add">
              <label class="control-label">Giá bán</label>
              <input class="form-info" type="number" id="address" required>
            </div>
            <div class="form-info-add">
              <label class="control-label">Giá vốn</label>
              <input class="form-info" type="number" id="phone" required>
            </div>
            <div class="form-info-add">
              <label class="control-label">Tình trạng</label>
              <select  id="ex-select1" class="form-info" required>
                <option>-- Chọn tình trạng --</option>
                <option>Còn hàng</option>
                <option>Hết hàng</option>
              </select>
            </div>
            <div class="form-info-add">
              <label class="control-label">Danh mục</label>
              <select  id="ex-select2" class="form-info" required>
                <option>-- Chọn danh mục --</option>
                <option>Iphone</option>
                <option>Samsung</option>
                <option>Oppo</option>
                <option>Realme</option>
                <option>Redme</option>
              </select>
            </div>
            <div class="form-info-add">
              <label class="control-label">Nhà cung cấp</label>
              <select  id="ex-select3" class="form-info" required>
                <option>-- Chọn nhà cung cấp --</option>
                <option>FPT</option>
                <option>Thế giới di động</option>
                <option>CellphoneS</option>
                <option>Apple</option>
              </select>
            </div>
            <div class="form-info-add">
              <label class="control-label">Ảnh 3x4</label>
              <div class="myfileupload">
                <img src="" alt="">
                <input type="file" id="uploadfile" name="ImageUpLoad">
              </div>
            </div>
            <div>
              <button onclick="add()" class="btn-save">Lưu</button>
              <button class="btn-close">Hủy</button>
            </div>
        </form>
        <div class="table-sff">
          <table class="table-manage-staffs" id="render">
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th width="250">Tên Sản Phẩm</th>
                <th>Ảnh</th>
                <th width="100">Số lượng</th>
                <th width="140">Giá bán</th>
                <th width="100">Giá vốn</th>
                <th width="100">Danh mục</th>
                <th width="210">Nhà cung cấp</th>
                <th width="150">Tính năng</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
            `
        }
    })
})
// contentContainer.innerHTML = ''
/*thoi gian*/
function time1() {
    var today = new Date();
    var weekday = new Array(7);
    weekday[0] = "Chủ Nhật";
    weekday[1] = "Thứ Hai";
    weekday[2] = "Thứ Ba";
    weekday[3] = "Thứ Tư";
    weekday[4] = "Thứ Năm";
    weekday[5] = "Thứ Sáu";
    weekday[6] = "Thứ Bảy";
    var day = weekday[today.getDay()];
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    nowTime = h + " giờ " + m + " phút " + s + " giây";
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = day + ', ' + dd + '/' + mm + '/' + yyyy;
    tmp = '<span class="date"> ' + today + ' - ' + nowTime +
        '</span>';
    document.getElementById('clock').innerHTML = tmp;
    clocktime = setTimeout("time()", "1000", "Javascript");

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
}
const myChart = new Chart("myChart", {
    type: "line",
    data: {},
    options: {}
});
const xValues = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            data: [20, 59, 90, 51, 56, 100],
            borderColor: "red",
            fill: false
        }, {
            data: [48, 48, 49, 39, 86, 10],
            borderColor: "green",
            fill: false
        },]
    },
    options: {
        legend: { display: false }
    }
});
const myChart1 = new Chart("myChart1", {
    type: "bar",
    data: {},
    options: {}
});

var xxValues = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"];
var yValues = [20, 59, 90, 51, 56, 100];
var yyValues = [48, 48, 49, 39, 86, 10];
var barColors = []
new Chart("myChart1", {
    type: "bar",
    data: {
        labels: xxValues,
        datasets: [{
            backgroundColor: "red",
            data: yValues
        }, {
            backgroundColor: "green",
            data: yyValues
        }]
    },
    legend: { display: false }
});
