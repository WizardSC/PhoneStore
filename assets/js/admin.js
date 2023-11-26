const usernameLabel = $('.info__name')
const contentContainer = $('#content')
const listControlItems = $$('.nav-links__item')
function loadForm() {
    const userID = User.checkLoginId()
    const username = User.getUserID(userID)
    usernameLabel.innerText = username.full_name
}

loadForm()

Array.from(listControlItems).forEach((item) => {
    item.addEventListener('click', () => {
        const activeItem = $('.nav-links__item.active');
        if (activeItem) {
            activeItem.classList.remove('active')
        }
        if (item.getAttribute('data-value') === 'trang-chu') {
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
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+ElEQVR4nO2dyXPcVBCH391z5pIcgT/BNhCzQ1jDvu8QbAcqfwOVxcaJxwkeEieGmDgGDilXDtwBB+Iknn3xMuMlO3vhKuy71ZRGT7akeRpJM3otadJd9d3m9P063U/tQxijoqKioqKioqKioqKioqKioqISFCzt3g6V7klY6FmHcjdA+WPOboCFjzgfAix8oDH/PsD8e5x3AebfAZhTeRtg7i3OmwCzb3BeB5h9TaP0KkDpFc7LAKWXAIoqLwIUX+A8D0rhOVAKuzjPglJ4BpS8ytOg5J/iPAlK7gnOTlByj2tkHwMl+yjnEVCyD4OSUXkIlMyDnAdASd/P6QIlvUMjdR8oqXs598BGqmN9Y6bzHFzuuEtK88DS3u1Q6V2FSg9AWYUCUAwBKKlOUJKdsJFsX4VLndv8D6DSOwmVXqAAdtQNQEl2wMZM+1kJAexZpwC63Abwn4wAgALochWAkmwHCiCPu4QpgEKwryAKoEAB3NbfAQrtgF0UAP0L6KRXkNKqI0ivf75noPO3yndm/tL5dos/jUxo/GHkjMbvVsYZ/GblNINbAm5+U8sNlTEz11VOmbmm8/UWV3W+0rhiZZTBigBp4o0BeBY/4UH8uHvxN097kD7mQbpX8ScZLHOkByAUL6vbx5G73U78qLN41AB86/YzPoyZMWfx1wTiG+720VrpKksnNKQHYJTezJiR0u1jOGNGJB41gFYdMyseu93IosoIQgDYY+aG124/hdftRvE68gOwSp9A7vYx3KUqEm+VrlLhSA8grG/3q5KWqivxx7eQH4CHt/utiLzdl53EjziLVyljBBClpXpFRreP1EqvckwDJwCf3+7XQ7xU63W7UbzKAkYArbhUl7x2+3Gz9E2+xAog5AexZcljRiReZR4jgJZYqieaGzNW6UbQAgjLUl0RST+J0+0mEgzmEggBROEgtuR3t9uJT2yJn8MOoBXe7mUXS7Vet5sYZjA7jBBAFA5iizLGTKK++Fm0AFrw7b5gkC4SXyM9YZauU/oCIYCwvN0XkZZqvW43iteRH0AEDmIVyWOmikG6ThEjgDAv1YqEpVqv243ii0c15AcQgYNY2e9utxN/tBbpAbTCUp33sFTrdbtOQecIVgBhOIgdC27MmMQfMSM9gJZdqsPuxoyx23XyOkOYAQS0VMuNdnvC/243iteRH0AEDmJzPi5Vt+JzHOkBRHnMlBpYqm6kV4lryA8gAgexWcljxipdJcuRHkArvt0LDXZ71sogUgBhP4iVZHS7nfhBjQxHegC321LNxe3FZwSgBBD2g1jRx6WadSP+MIM0R3oAUTiIFSWPGZF41ACitlQLXPr5T9tgqjfmutun9rTBTz0xR+kqqUMa0gOIwkGsIOj285+0wQ8776jyc2/MsdtV+frvqyE4iEcNIOwHsbxlzBjlb4bQE7MdM0b5myF0x2ylqyRVBhACCMOYKXhYqiL5phAsc10kX+fH7lit+AEz8gOIwEEsJ5jvVplOS9X6eyfxMxzpAUTp7Z41YBXqtFRFASTtxH++hfwAInAQywpme00ADkvV+nsn8SqXMQIIw1LNu/xSNY4Zq9B6Lxm7AOykV+nXkB9ABA5iGcFsFwUgfM3wDrf+3km8yiWMAMKyVLMev1S9LlVRAHbSN+nDCiDMB7HD7j6Y3C5Vt+JVLmIEEPhBbNAH8QM+iO8zi7+IHUDQSzVTT7yXbh9ovNs3OagxfRAhgKbHjM/n3zTGmOlzFj+NHUDQSzXtcszYnRUaRRc/beUAgwsHEAIIYsykm+h2vwOwE38BLYAA/sqUbmKpSgnAIl3n1/0IAQQyZg65Ey9aqn4HYCdeR34ATRzEorhUp+063iAdNYCgl2rSjfj++uJN0h2War1uDyaAOFuT8XZPIX2pNtTtLsRX2cf8/48brJUbYueCXKoziGPGlXQDv+xjk9IDKMTZ3bk4+xdjqSb9+lL1ecwI5e9nq1OfsTsZRuWH2LZsnJ3NDrK1UCzVfnlL1YX4NbXz0eRTUVFRUVFRUVFRUVFRUVFRUbGo1v/1kVT2y7IjkwAAAABJRU5ErkJggg==">
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
        if (item.getAttribute('data-value') === 'ql-nguoidung') {
            contentContainer.innerHTML =
                `
                <div class="top-line">
                <h1 class="top-line__heading">QUẢN LÝ NGƯỜI DÙNG</h1>
            </div>


            <div class="content__container">
                <ul class="function__list">
                    <li class="function__item active" data-value="add">
                        <span class="function__item-title">
                            Thêm mới
                        </span>
                    </li>
                    <li class="function__item" data-value="update">
                        <span class="function__item-title">
                            Chỉnh sửa
                        </span>
                    </li>
                    <li class="function__item" data-value="delete">
                        <span class="function__item-title">
                            Xóa
                        </span>
                    </li>


                </ul>
                <form id="form-admin">
                    <div class="form-container">

                        <div class="form-group">
                            <label for="user-id" class="form-label">Mã người dùng</label>

                            <input id="user-id" name="user-id" type="text" class="form-control" disabled="true">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="user-full_name" class="form-label">Họ tên người dùng</label>

                            <input id="user-full_name" name="user-full_name" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>

                        <div class="form-group">
                            <label for="user-username" class="form-label">Tên đăng nhập</label>

                            <input id="user-username" name="user-username" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="user-password" class="form-label">Mật khẩu</label>

                            <input id="user-password" name="user-password" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="user-email" class="form-label">Email</label>

                            <input id="user-email" name="user-email" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="user-phone" class="form-label">Số ĐT</label>

                            <input id="user-phone" name="user-phone" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group form-group--full">
                            <label for="user-address" class="form-label">Địa chỉ</label>

                            <input id="user-address" name="user-address" type="text" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="user-permission" class="form-label">Quyền</label>
                            <select name="user-permission" id="user-permission" class="form-control">
                                <option value="">--Chọn quyền--</option>
                                <option value="customer">Khách hàng</option>
                                <option value="admin">Admin</option>

                            </select>
                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="user-status" class="form-label">Trạng thái</label>
                            <select name="user-status" id="user-status" class="form-control">
                                <option value="">--Chọn trạng thái--</option>

                                <option value="active">Hoạt động</option>
                                <option value="inactive">Không hoạt động</option>

                            </select>
                            <span class="form-message"></span>
                        </div>



                    </div>
                    <div class="form-controls">
                        <button class="btn-control" id="btn-save">Lưu</button>
                        <button class="btn-control" id="btn-cancel">Hủy</button>
                    </div>
                </form>
                <table id="product-table">
                    <thead>
                        <tr class="product-table__heading">
                            <th>Mã User</th>
                            <th>Tên đăng nhập</th>
                            <th>Mật khẩu</th>
                            <th>Họ tên người dùng</th>
                            <th>Email</th>
                            <th>Số ĐT</th>
                            <th style="width: 250px;">Địa chỉ</th>
                            <th>Hành động</th>
                            <!-- <th></th> -->

                        </tr>
                    </thead>
                    <tbody class="product-table__list">
                        <tr class="product-table__row product-table__row--clicked">
                            <td>1</td>
                            <td>Samsung Galaxy S23 Ultra 256GB</td>
                            <td>10000000</td>
                            <td>9000000</td>
                            <td>Đã xử lý</td>
                            <td>
                                <button class="product-table__update-btn product-table-btn">Sửa</button>
                                <button class="product-table__delete-btn product-table-btn">Xóa</button>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
            `
            initUserPage()
        }
        if (item.getAttribute('data-value') === 'ql-sanpham') {
            item.classList.add('active')


            contentContainer.innerHTML =
                `
                <div class="top-line">
                <h1 class="top-line__heading">QUẢN LÝ SẢN PHẨM</h1>
            </div>

            <div class="content__container">

                <ul class="function__list">
                    <li class="function__item active" value="add">
                        <span class="function__item-title" >
                            Thêm mới
                        </span>
                    </li>
                    <li class="function__item" value="update">
                        <span class="function__item-title" >
                            Chỉnh sửa
                        </span>
                    </li>
                    <li class="function__item" value="delete">
                        <span class="function__item-title" >
                            Xóa
                        </span>
                    </li>


                </ul>
                <form id="form-admin">
                    <div class="form-container">

                        <div class="form-group">
                            <label for="product-id" class="form-label">Mã SP</label>

                            <input id="product-id" name="product-id" type="text" placeholder="VD: Mã SP: 1"
                                class="form-control" disabled="true">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="product-name" class="form-label">Tên SP</label>

                            <input id="product-name" name="product-name" type="text" placeholder="VD: Mã SP: 1"
                                class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="product-price-old" class="form-label">Giá trước KM</label>

                            <input id="product-price-old" name="product-price-old" type="text"
                                placeholder="VD: Mã SP: 1" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="product-price-current" class="form-label">Giá sau KM</label>

                            <input id="product-price-current" name="product-price-current" type="text"
                                placeholder="VD: Mã SP: 1" class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="product-brand" class="form-label">Brand</label>
                            <select name="product-brand" id="product-brand" class="form-control">
                                <option value="Iphone">Iphone</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Oppo">Oppo</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="Vivo">Vivo</option>
                                <option value="Realme">Realme</option>
                                <option value="Nokia">Nokia</option>
                                <option value="Masstel">Masstel</option>
                                <option value="Itel">Itel</option>
                                <option value="Mobell">Mobell</option>
                            </select>
                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="product-sale" class="form-label">Phần trăm KM</label>

                            <input id="product-sale" name="product-sale" type="text" placeholder="VD: Mã SP: 1"
                                class="form-control">

                            <span class="form-message"></span>
                        </div>
                        <!-- Form Group for ROM -->
                        <div class="form-group">
                            <label class="form-label">ROM</label>
                            <div class="checkbox-group checkbox-group-rom">
                                <input type="checkbox" id="rom-16gb" name="rom-16gb" class="form-checkbox" data-value="16 GB">
                                <label for="rom-16gb">16 GB</label>

                                <input type="checkbox" id="rom-32gb" name="rom-32gb" class="form-checkbox" data-value="32 GB">
                                <label for="rom-32gb">32 GB</label>

                                <input type="checkbox" id="rom-64gb" name="rom-64gb" class="form-checkbox" data-value="64 GB">
                                <label for="rom-64gb">64 GB</label>

                                <input type="checkbox" id="rom-128gb" name="rom-128gb" class="form-checkbox" data-value="128 GB">
                                <label for="rom-128gb">128 GB</label>

                                <input type="checkbox" id="rom-256gb" name="rom-256gb" class="form-checkbox" data-value="256 GB">
                                <label for="rom-256gb">256 GB</label>

                                <input type="checkbox" id="rom-512gb" name="rom-512gb" class="form-checkbox" data-value="512 GB">
                                <label for="rom-512gb">512 GB</label>

                                <input type="checkbox" id="rom-1tb" name="rom-1tb" class="form-checkbox" data-value="1 TB">
                                <label for="rom-1tb">1 TB</label>

                            </div>
                            <span class="form-message"></span>
                        </div>

                        <!-- Form Group for RAM -->
                        <div class="form-group">
                            <label class="form-label">RAM</label>
                            <div class="checkbox-group checkbox-group-ram">
                                <input type="checkbox" id="ram-1gb" name="ram-1gb" class="form-checkbox" data-value="1 GB">
                                <label for="ram-1gb">1 GB</label>

                                <input type="checkbox" id="ram-2gb" name="ram-2gb" class="form-checkbox" data-value="2 GB">
                                <label for="ram-2gb">2 GB</label>

                                <input type="checkbox" id="ram-3gb" name="ram-3gb" class="form-checkbox" data-value="3 GB">
                                <label for="ram-3gb">3 GB</label>

                                <input type="checkbox" id="ram-4gb" name="ram-4gb" class="form-checkbox" data-value="4 GB">
                                <label for="ram-4gb">4 GB</label>

                                <input type="checkbox" id="ram-6gb" name="ram-6gb" class="form-checkbox" data-value="6 GB">
                                <label for="ram-6gb">6 GB</label>

                                <input type="checkbox" id="ram-8gb" name="ram-8gb" class="form-checkbox" data-value="8 GB">
                                <label for="ram-8gb">8 GB</label>

                                <input type="checkbox" id="ram-12gb" name="ram-12gb" class="form-checkbox" data-value="12 GB">
                                <label for="ram-12gb">12 GB</label>

                            </div>
                            <span class="form-message"></span>
                        </div>
                        <div class="form-group form-group--full">
                            <label for="product-img" class="form-label">Ảnh (Nhập đường dẫn)</label>

                            <input id="product-img" name="product-img" type="text"
                                placeholder="VD: https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-ultra.png"
                                class="form-control">
                            <span class="form-message"></span>
                        </div>


                    </div>
                    <div class="form-controls">
                        <button class="btn-control" id="btn-save">Lưu</button>
                        <button class="btn-control" id="btn-cancel">Hủy</button>
                    </div>
                </form>

            </div>
            <table id="product-table">
                <thead>
                    <tr class="product-table__heading">
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Giá ban đầu</th>
                        <th>Giá sau KM</th>
                        <th>% KM</th>
                        <th>Brand</th>
                        <th>RAM</th>
                        <th>ROM</th>
                        <th>Link ảnh</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody class="product-table__list">
                    <tr class="product-table__row">
                        <td>1</td>
                        <td>Samsung Galaxy S23 Ultra 256GB</td>
                        <td>10000000</td>
                        <td>9000000</td>
                        <td>10</td>
                        <td>Samsung</td>
                        <td>2GB, 3GB</td>
                        <td>512GB, 1TB</td>
                        <td><img class="product-table__img"
                                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-ultra.png"
                                alt=""></td>
                        <td>
                            <button class="product-table__update-btn product-table-btn">Sửa</button>
                            <button class="product-table__delete-btn product-table-btn">Xóa</button>
                        </td>
                    </tr>

                </tbody>
            </table>
            `
            initProductPage()
        }
        if (item.getAttribute('data-value') === 'ql-hoadon') {
            item.classList.add('active')

            contentContainer.innerHTML =
                `<div class="top-line">
            <h1 class="top-line__heading">QUẢN LÝ HÓA ĐƠN</h1>
        </div>

        <div class="search">
        </div>

        <div class="filter">
            <div class="filter__item">
                <label class="filter__label" for="filter__start-date">Chọn ngày bắt đầu:</label>
                <input type="datetime-local" class="filter__input" id="filter__start-date" name="filter__start-date"
                    placeholder="Chọn ngày bắt đầu">
            </div>
            <div class="filter__item">
                <label class="filter__label" for="filter__end-date">Chọn ngày kết thúc:</label>
                <input type="datetime-local" class="filter__input" id="filter__end-date" name="filter__end-date"
                    placeholder="Chọn ngày bắt đầu">
            </div>
            <div class="filter__item">
                <div class="filter__button">Lọc</div>
            </div>
        </div>
        <div class="content__container">
            <form id="form-admin">
                <div class="form-container">

                    <div class="form-group">
                        <label for="invoice-id" class="form-label">Mã HĐ</label>

                        <input id="invoice-id" name="invoice-id" type="text" class="form-control" disabled="true">

                        <span class="form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="invoice-user-id" class="form-label">Mã KH</label>

                        <input id="invoice-user-id" name="invoice-user-id" type="text" class="form-control">

                        <span class="form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="invoice-order-time" class="form-label">Thời gian đặt hàng</label>

                        <input id="invoice-order-time" name="invoice-order-time" type="text" class="form-control">

                        <span class="form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="invoice-total-price" class="form-label">Tổng tiền</label>

                        <input id="invoice-total-price" name="invoice-total-price" type="text" class="form-control">

                        <span class="form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="invoice-status" class="form-label">Tình trạng</label>

                        <input id="invoice-status" name="invoice-status" type="text" class="form-control">

                        <span class="form-message"></span>
                    </div>

                    <div class="form-label">
                        <div class="invoice-label">Đơn hàng chưa được xử lý! Nhấn nút để xử lý ngay</div>
                    </div>


                </div>
                <div class="form-controls">
                    <button class="btn-control" id="btn-process">Xử lý</button>
                    <button class="btn-control" id="btn-cancel">Hủy</button>
                </div>
            </form>
            <table id="product-table">
                <thead>
                    <tr class="product-table__heading">
                        <th>Mã HD</th>
                        <th>Thời gian đặt hàng </th>
                        <th>Mã KH</th>
                        <th>Tổng tiền</th>
                        <th>Tình trạng</th>
                    </tr>
                </thead>
                <tbody class="product-table__list">
                    <tr class="product-table__row product-table__row--clicked">
                        <td>1</td>
                        <td>Samsung Galaxy S23 Ultra 256GB</td>
                        <td>10000000</td>
                        <td>9000000</td>
                        <td>Đã xử lý</td>
                    </tr>

                </tbody>
            </table>

        </div>`
            initInvoicePage()
        }
        if (item.getAttribute('data-value') === 'product-page') {
            redirectToProductPage()
        }
        const logOutBtn = $('#log-out-btn')
        logOutBtn.addEventListener('click', (e) => {
            e.preventDefault()
            User.logOut()
            redirectToProductPage()
        })
    })
})


function initProductPage() {
    const usernameLabel = $('.info__name')
    const btnSave = $('#btn-save')
    const btnCancel = $('#btn-cancel')
    const btnUpdate = $('.product-table__update-btn')
    const btnDelete = $('.product-table__delete-btn')
    const functionList = $$('.function__item')
    const contentContainer = $('#content')
    const listControlItems = $$('.nav-links__item')

    renderProductToTable()

    function renderProductToTable() {
        const tableBody = $('.product-table__list')
        const productList = Product.getProducts()
        let html = ''
        if (productList) {
            Array.from(productList).forEach(product => {

                html +=
                    `
                <tr class="product-table__row">
                            <td>${product.productID}</td>
                            <td>${product.name}</td>
                            <td>${money.formatCurrencytoVND(product.price_old)}</td>
                            <td>${money.formatCurrencytoVND(product.price_current)}</td>
                            <td>${product.sale}</td>
                            <td style="text-transform: capitalize;">${product.brand}</td>
                            <td>${product.ram}</td>
                            <td>${product.rom}</td>
                            <td><img class="product-table__img" src="${product.img}" alt=""></td>
                            <td>
                                <button class="product-table__update-btn product-table-btn" data-product-id="${product.productID}">Sửa</button>
                                <button class="product-table__delete-btn product-table-btn" data-product-id="${product.productID}">Xóa</button>
                            </td>
                        </tr>
                `
            })
            tableBody.innerHTML = html
            const productRowList = $$('.product-table__row')
            Array.from(productRowList).forEach(row => {
                const updateButton = row.querySelector('.product-table__update-btn')
                const deleteButton = row.querySelector('.product-table__delete-btn')
                updateButton.addEventListener('click', () => {
                    const productID = updateButton.getAttribute('data-product-id')
                    const productItem = Product.getProductID(parseInt(productID))
                    renderProduct(productItem, true)

                })

                deleteButton.addEventListener('click', () => {
                    const productID = deleteButton.getAttribute('data-product-id')
                    const productItem = Product.getProductID(parseInt(productID))
                    renderProduct(productItem, false)
                    deleteProduct(parseInt(productID))
                })


            })
        }
    }
    let listROM = [];
    let listRAM = [];
    let productId = document.getElementById('product-id');
    let productName = document.getElementById('product-name');
    let productPriceOld = document.getElementById('product-price-old');
    let productPriceCurrent = document.getElementById('product-price-current');
    let productBrand = document.getElementById('product-brand');
    let productSale = document.getElementById('product-sale');
    let productIMG = document.getElementById('product-img');
    let listROMCheckbox = $$('.checkbox-group-rom input[type="checkbox"]');
    let listRAMCheckbox = $$('.checkbox-group-ram input[type="checkbox"]');
    function resetValue() {
        productId.value = '';
        productName.value = '';
        productPriceOld.value = '';
        productPriceCurrent.value = '';
        productBrand.selectedIndex = -1; // Bỏ chọn option trong select
        productSale.value = '';
        productIMG.value = '';
        listRAM = []
        listROM = []
        Array.from(listROMCheckbox).forEach(item => item.checked = false)
        Array.from(listRAMCheckbox).forEach(item => item.checked = false)

    }
    // Khi nhấn nút thêm thì active nút thêm
    Array.from(functionList).forEach(item => {
        item.addEventListener('click', () => {
            // Loại bỏ lớp 'active' từ tất cả các phần tử
            Array.from(functionList).forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Thêm lớp 'active' cho phần tử được kích hoạt có giá trị là 'add'
            if (item.getAttribute('value') === 'add') {
                item.classList.add('active');
                resetValue()
            }
        });
    })


    function addProduct() {
        // Lấy giá trị của các input
        Array.from(listROMCheckbox).forEach((item, index) => {
            if (item.checked) {
                listROM.push(romValues[index])
            }
        })
        Array.from(listRAMCheckbox).forEach((item, index) => {
            if (item.checked) {
                listRAM.push(ramValues[index])
            }

        })
        Product.addProduct(productName.value, productPriceOld.value, productPriceCurrent.value, productIMG.value, productBrand.value, listRAM, listROM, productSale.value)

        resetValue()
        renderProductToTable()



    }
    function renderProduct(productItem, isUpdate) {
        resetValue()
        //active cho thẻ sửa
        Array.from(functionList).forEach(item => {
            if (item.classList.contains('active')) item.classList.remove('active')
            if (item.getAttribute('value') === 'update' && isUpdate == true) {

                item.classList.add('active')
            }
            if (item.getAttribute('value') === 'delete' && isUpdate == false) {
                item.classList.add('active')
            }
        })

        //Render thông tin sản phẩm lên form
        productId.value = productItem.productID
        productName.value = productItem.name
        productPriceCurrent.value = productItem.price_current
        productPriceOld.value = productItem.price_old
        productIMG.value = productItem.img
        const indexToSelect = Array.from(productBrand.options).findIndex(option => option.value.toLowerCase() === productItem.brand.toLowerCase());
        if (indexToSelect !== -1) {
            // Chọn option bằng cách gán giá trị cho selectedIndex
            productBrand.selectedIndex = indexToSelect;
        } else {
            console.error(`Không tìm thấy option với giá trị ${productItem.brand}`);
        }
        productSale.value = productItem.sale
        Array.from(listROMCheckbox).forEach((item) => {
            productItem.rom.forEach((value) => {
                if (item.getAttribute('data-value') === value) {
                    item.checked = true
                    listROM.push(value)
                }
            })
        })

        Array.from(listRAMCheckbox).forEach((item) => {
            productItem.ram.forEach((value) => {
                if (item.getAttribute('data-value') === value) item.checked = true
                listRAM.push(value)
            })
        })

    }

    btnSave.addEventListener('click', (e) => {
        e.preventDefault();
        const isUpdateActive = Array.from(functionList).some(item => {
            if (item.getAttribute('value') === 'update' && item.classList.contains('active')) {

                updateProduct();
                renderProductToTable();
                return true;
            }
            if (item.getAttribute('value') === 'add' && item.classList.contains('active')) {

                addProduct();
                renderProductToTable();
                return true;
            }
            return false;
        });

        if (!isUpdateActive) {
            console.log('No active "update" item found.');
        }
    });
    btnCancel.addEventListener('click', (e) => {
        e.preventDefault();
        resetValue();
    })
    function updateProduct() {
        listRAM = []
        listROM = []
        //chỉnh sửa thông tin sản phẩm
        Array.from(listROMCheckbox).forEach((item, index) => {
            if (item.checked) {
                listROM.push(romValues[index])
            }
        })
        Array.from(listRAMCheckbox).forEach((item, index) => {
            if (item.checked) {
                listRAM.push(ramValues[index])
            }

        })

        Product.updateProduct(productId.value, productName.value, productPriceOld.value, productPriceCurrent.value, productIMG.value, productBrand.value, listRAM, listROM, productSale.value)
    }

    function deleteProduct(productID) {
        if (confirm('Bạn có muốn xóa sản phẩm này?')) {
            Product.deleteProduct(productID)
            renderProductToTable()
        }
    }

}

function initInvoicePage() {
    const invoiceList = Invoice.getInvoices()
    const invoiceIDInput = $('#invoice-id')
    const invoiceUserIDInput = $('#invoice-user-id')
    const invoiceOrderTimeInput = $('#invoice-order-time')
    const invoiceTotalPriceInput = $('#invoice-total-price')
    const invoiceStatusInput = $('#invoice-status')
    const message = $('.invoice-label')
    const processBtn = $('#btn-process')
    const cancelBtn = $('#btn-cancel')
    renderInvoice(invoiceList)
    function renderInvoice(listInvoice) {
        const tableBody = $('.product-table__list')
        let html = ''
        Array.from(listInvoice).forEach(invoice => {
            let status = ''
            if (invoice.status === false) {
                status = 'Chưa xử lý'
            } else if (invoice.status === true) {
                status = 'Đã xử lý'
            }
            html += `
            <tr class="product-table__row product-table__row--clicked">
                            <td>${invoice.invoiceID}</td>
                            <td>${time.getDateTime(invoice.orderTime)}</td>
                            <td>${invoice.userID}</td>
                            <td>${money.formatCurrencytoVND(Invoice.getTotalPriceOfInvoice(invoice.invoiceID))}</td>
                            <td>${status}</td>
                        </tr>
            `
        })

        tableBody.innerHTML = html
        clickedRow()


    }
    const filterButton = $('.filter__button')
    const startDateInput = $('#filter__start-date')
    const endDateInput = $('#filter__end-date')
    filterButton.addEventListener('click', () => {
        const startDate = time.getDateTime(startDateInput.value)
        const endDate = time.getDateTime(endDateInput.value)

        const filterList = Invoice.getInvoiceByDateTime(startDate, endDate)
        renderInvoice(filterList)
    })
    function resetValue() {

        invoiceIDInput.value = ''
        invoiceUserIDInput.value = ''
        invoiceOrderTimeInput.value = ''
        invoiceTotalPriceInput.value = ''
        invoiceStatusInput.value = ''
        message.classList.remove('active')
    }

    function clickedRow() {
        const rowTable = $$('.product-table__row--clicked')
        Array.from(rowTable).forEach(row => {
            row.addEventListener('click', () => {
                const invoiceID = row.cells[0].innerText;
                clickedRow.selectedInvoiceID = invoiceID;
                const invoiceOrderTime = row.cells[1].innerText;
                const invoiceUserID = row.cells[2].innerText;
                const invoiceTotalPrice = row.cells[3].innerText;
                const invoiceStatus = row.cells[4].innerText;

                invoiceIDInput.disabled = true
                invoiceUserIDInput.disabled = true
                invoiceOrderTimeInput.disabled = true
                invoiceTotalPriceInput.disabled = true
                invoiceStatusInput.disabled = true

                if (invoiceStatus === 'Chưa xử lý') {

                    message.classList.add('active')
                    processBtn.disabled = false;

                }
                else {
                    processBtn.disabled = true;

                    message.classList.remove('active')

                    // processBtn.style.backgroundColor = '#999'


                }
                invoiceIDInput.value = invoiceID
                invoiceOrderTimeInput.value = invoiceOrderTime
                invoiceUserIDInput.value = invoiceUserID
                invoiceTotalPriceInput.value = invoiceTotalPrice
                invoiceStatusInput.value = invoiceStatus
            })
        })



    }



    processBtn.addEventListener('click', (e) => {

        e.preventDefault()

        const invoiceID = clickedRow.selectedInvoiceID;
        Invoice.updateInvoiceStatus(parseInt(invoiceID), true)
        const newList = Invoice.getInvoices()
        renderInvoice(newList)
        resetValue()
    })

    cancelBtn.addEventListener('click', (e) => {
        resetValue()
        e.preventDefault()
    })
}

// initInvoicePage()

function initUserPage() {
    const userList = User.getUsers()
    const tableBody = $('.product-table__list')
    const userIDInput = $('#user-id')
    const fullNameInput = $('#user-full_name')
    const usernameInput = $('#user-username')
    const passwordInput = $('#user-password')
    const emailInput = $('#user-email')
    const phoneInput = $('#user-phone')
    const addressInput = $('#user-address')
    const permissionInput = $('#user-permission')
    const statusInput = $('#user-status')
    const functionList = $$('.function__item')

    const btnSave = $('#btn-save')
    const btnCancel = $('#btn-cancel')

    renderUserList(userList)

    function renderUserList(listUser) {
        userIDInput.value = User.getLastUserID() + 1
        let html = ''
        Array.from(listUser).forEach(user => {


            html += `
            <tr class="product-table__row" data-value=${user.userID}>
                <td>${user.userID}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>${user.full_name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.address}</td>
                <td>
                            <button class="product-table__update-btn product-table-btn">Sửa</button>
                            <button class="product-table__delete-btn product-table-btn">Xóa</button>
                        </td>
            </tr>
             `
        })

        tableBody.innerHTML = html
        const tableRow = $$('.product-table__row')
        Array.from(tableRow).forEach(row => {
            const userID = row.getAttribute('data-value')
            const user = User.getUserID(parseInt(userID))
            const btnUpdate = row.querySelector('.product-table__update-btn')
            const btnDelete = row.querySelector('.product-table__delete-btn')

            const username = row.cells[1].innerText
            const password = row.cells[2].innerText
            const fullName = row.cells[3].innerText
            const email = row.cells[4].innerText
            const phone = row.cells[5].innerText
            const address = row.cells[6].innerText
            const permission = user.isAdmin ? 'admin' : 'customer'
            const status = user.isActive ? 'active' : 'inactive'
            btnUpdate.addEventListener('click', () => {
                userIDInput.value = userID
                fullNameInput.value = fullName
                passwordInput.value = password
                usernameInput.value = username
                emailInput.value = email
                phoneInput.value = phone
                addressInput.value = address
                permissionInput.value = permission
                statusInput.value = status
                Array.from(functionList).forEach(item => {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active')
                    }
                    if (item.dataset.value === 'update') {
                        item.classList.add('active')
                    }
                })

            })

            btnDelete.addEventListener('click', () => {
                deleteUser(userID)
                resetValue()
            })
        })

    }
    function deleteUser(userID) {

        if (confirm('Bạn có muốn xóa người dùng này?')) {
            const user = User.getUserID(parseInt(userID))
            console.log(user.username)
            console.log(user.full_name)
            console.log(user.isAdmin)
            if (user.isAdmin === true) {

                alert('Không thể xóa người dùng quản trị (admin)');
                return
            } else {
                User.deleteUser(userID)
                resetValue()
                const newList = User.getUsers()
                renderUserList(newList)
            }



        }


    }
    function updateUser() {
        const userID = userIDInput.value
        const username = usernameInput.value
        const password = passwordInput.value
        const fullName = fullNameInput.value
        const email = emailInput.value
        const phone = phoneInput.value
        const address = addressInput.value
        const status = (statusInput.value === 'active') ? true : false
        User.updateUser(userID, username, password, email, phone, fullName, address, status)
        const newList = User.getUsers()

        User.loadUsers(newList)
        renderUserList(newList)
    }
    function addUser() {
        // const userID = userIDInput.value
        const username = usernameInput.value
        const password = passwordInput.value
        const fullName = fullNameInput.value
        const email = emailInput.value
        const phone = phoneInput.value
        const address = addressInput.value
        const permission = (permissionInput.value === 'admin') ? true : false
        const status = (statusInput.value === 'active') ? true : false
        User.addUser(username, password, email, phone, fullName, address, permission, status)
        const newList = User.getUsers()
        User.loadUsers(newList)
        renderUserList(newList)
    }
    btnSave.addEventListener('click', (e) => {
        e.preventDefault()
        Array.from(functionList).forEach(item => {
            if (item.classList.contains('active') && item.dataset.value === 'update') {
                updateUser()
                resetValue()

            } else if (item.classList.contains('active') && item.dataset.value === 'add') {
                addUser()
                resetValue()
            }
        })

    })
    btnCancel.addEventListener('click', (e) => {
        e.preventDefault();
        resetValue();
    })

    function resetValue() {
        functionList.forEach(item => {
            if (item.classList.contains('active')) {
                item.classList.remove('active')
            }
            if (item.dataset.value === 'add') {
                item.classList.add('active')
            }

        })
        userIDInput.value = ''
        usernameInput.value = ''
        passwordInput.value = ''
        fullNameInput.value = ''
        emailInput.value = ''
        phoneInput.value = ''
        addressInput.value = ''
        statusInput.value = ""
        permissionInput.value = ""
    }
}


