// Sự kiện khi nhấn tab đăng kí
function onDangKi() {
	// ẩn phần đăng nhập
	// hiển thị div đăng kí
	var divDki = document.getElementById("divdangki");
	var divDangnhap = document.getElementById("divdangnhap");
	divDki.style.display="block";
	divDangnhap.style.display="none";
}

// Sự kiện khi nhấn tab đăng nhập
function onDangNhap() {
	// ẩn phần đăng kí
	// hiển thị div đăng nhập
	var divDki = document.getElementById("divdangki");
	var divDangnhap = document.getElementById("divdangnhap");
	divDki.style.display="none";
	divDangnhap.style.display="block";
}

function ktraBatBuocDangKi() {
	var pthongbao1 = document.getElementById("pthongbao");
	var nghenghiep = document.getElementById("nghenghiep");
	var nam = document.getElementById("nam");
	var nu = document.getElementById("nu");
	var khac = document.getElementById("khac");
	if(frmDangKi.tendangnhap.value == "" || frmDangKi.matkhau.value == ""
	|| frmDangKi.email.value == "" || frmDangKi.tuoi.value == "") {
		frmDangKi.tendangnhap.style.border ="solid 2px red";
		frmDangKi.matkhau.style.border ="solid 2px red";
		frmDangKi.email.style.border ="solid 2px red";
		frmDangKi.tuoi.style.border ="solid 2px red";
		
		pthongbao1.style.display="block";
		pthongbao1.innerHTML="Bạn cần nhập đầy đủ thông tin"+"<br/>";
		return false;
	} else if(nghenghiep.selectedIndex == 0) {
		pthongbao1.style.display="block";
		pthongbao1.innerHTML="Bạn chưa chọn nghề nghiệp <br/>";
		return false;
	} else if(!nam.checked && !nu.checked && !khac.checked){
		pthongbao1.style.display="block";
		pthongbao1.innerHTML="Bạn chưa chọn giới tính <br/>";
		return false;
	} else {
		pthongbao1.style.display="none";
		return true;
	}
}

function kiemtrachieudaichuoi(idText, minlength, maxlength)
			{
				var inputText = document.getElementById(idText);
				var field = inputText.value;
				var pthongbao1 = document.getElementById("pthongbao");
					if(field.length<minlength || field.length> maxlength){
					pthongbao1.style.display = "block";
					pthongbao1.innerHTML = "Hãy nhập vào giá trị từ "+minlength+" đến "+maxlength;
					//pthongbao1.style.color = "red";
					return false;
					} else {
					pthongbao1.style.display = "none";
					return true;
			} 
			}

function KiemTraEmailHopLe(idTag) {
			var inputTag = document.getElementById(idTag);
			var email =  /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
			var pthongbao1 = document.getElementById("pthongbao");
			if(inputTag.value.match(email))
			{
				pthongbao1.style.display = "none";
				return true;
			} else {
				pthongbao1.style.display = "block";
				pthongbao1.innerHTML = "Hãy nhập email hợp lệ";
				//pthongbao.style.color = "green";
				return false;
			}
			}

function kiemtraTuoi(minTuoi, maxTuoi, idTagThongBao) {
	var pthongbao = document.getElementById(idTagThongBao);
	var tuoi = document.getElementById("tuoi");
	var numbers = /^[0-9]+$/;
	if(tuoi.value.match(numbers)) {
		var intTuoi = parseInt(tuoi.value);
		if(intTuoi > maxTuoi || intTuoi < minTuoi) {
			pthongbao.style.display = "block";
			pthongbao.innerHTML = "Hãy nhập tuổi từ: "+minTuoi+" đến "+maxTuoi;
			return false;
		} else {
				pthongbao.style.display = "none";
				return true;
			}
	} else {
			pthongbao.style.display = "block";
			pthongbao.innerHTML = "Hãy nhập tất cả đều là số";
			return false;
		}
}

function KiemTraHopLe() {
	return ktraBatBuocDangKi() && kiemtrachieudaichuoi("tendangnhap",1,30) && KiemTraEmailHopLe("email") && kiemtraTuoi(18,120,"pthongbao");
}