$(document).ready(function () {
    var i=1;
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
    //kiểm tra mã tour theo mẫu
    function kiemTraMa() {
        var i = 1;
        let mauKT = /^[A-Z]{3}\-[A-Z]{3}\-\d{2}-\d{4}$/;
        if ($("#txtMa").val() =="") {
            $("#tbMa").html("* bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#txtMa").val())) {
            $("#tbMa").html("* Mã tuor theo mẫu: XXX-XXX-00-0000");
            return true;
        }
        $("#tbMa").html("*");
        return true;
    }
    $("#txtMa").blur(kiemTraMa);
    
    //kiểm tra điểm đến
    function kiemTraDD() {
        
        if ($("#txtDiemDen").val() =="") {
            $("#tbDiemDen").html("* bắt buộc nhập");
            return false;
        }
        $("#tbDiemDen").html("*");
        return true;
    }
    $("#txtDiemDen").blur(kiemTraDD);

    
    function kiemTraNgayKH() {
        if ($("#txtNgay").val() =="") {
            $("#tbNgay").html("* bắt buộc nhập");
            return false;
        }
        var today = new Date();
        var day = new Date($("#txtNgay").val());
        today= today.setDate(today.getDate() +30);
        if (today >day) {
            $("#tbNgay").html("* Ngày khởi hành phải sau ngày hiện tại 30 ngày");
            return false;
        }
        
        $("#tbNgay").html("*");
        return true;
    }
    $("#txtNgay").blur(kiemTraNgayKH);

    //kiểm tra giá tour
    function kiemTraGia() {
        
        var gia = $("#txtGia").val();
        if (gia == "") {
            $("#tbGia").html("* bắt buộc nhập");
            return false;
        }
        if (isNaN(gia)) {
            $("#tbGia").html("* Phải nhập số");
            return false;
        }
        if (eval(gia)<0) {
            $("#tbGia").html("* Phải nhập số > 0");
            return false;
        }
        $("#tbGia").html("*");
        return true;
    }
    $("#txtGia").blur(kiemTraGia);

    $("#btnSave").click(function () {
        if (!kiemTraMa() || !kiemTraDD() || !kiemTraNgayKH() || !kiemTraGia()) {
            $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin")
            return false;
        }
        var matour = $("#txtMa").val();
        var diemden = $("#txtDiemDen").val();
        var ngaykh = $("#txtNgay").val();
        var tg = $("#txtTG").val();
        var gia = $("#txtGia").val();

        var anh = $("#txtAnh").val().substring(12);

        var them = "<tr><td>" + (i++) + "</td><td>" + matour + "</td><td>"+ diemden + "</td><td>"+ ngaykh + "</td><td>"+ tg + "</td><td>"+ gia + "</td><td>"+ anh + "</td></tr>"
        $("table tbody").append(them);
        $("#myModal").modal("hide");
        return true;
    })
})