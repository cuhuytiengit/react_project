import React from "react";
import "../css/CenterPage.css";
import banner1 from "../IMG/banner1.jpg";
import banner2 from "../IMG/banner2.jpg";
import banner3 from "../IMG/banner3.jpg";
function CenterPage() {
  return (
    <div className="Header">
      <div className="Carousle">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banner1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="loiIch">
        <h1>Lợi ích</h1>
        <div className="tieuDe">
          1. Giảm cholesterol
          <br />
        </div>
        <p>
          Các loại rau xanh như rau bina, cải xoăn giúp giảm lượng cholesterol,
          hay bắp cải rất giàu chất chống oxy hóa, ngăn ngừa cholesterol xấu và
          tăng lượng cholesterol tốt cho cơ thể.
          <br />
        </p>
        <div className="tieuDe">
          2. Cải thiện thị lực
          <br />
        </div>
        <p>
          Tất cả các loại rau xanh đều hữu ích trong việc cải thiện thị lực.
          Chúng có hàm lượng lutein và zeaxanthin cao, các thành phần quan trọng
          cho đôi mắt, bảo vệ các điểm vàng, ngăn chặn thiệt hại do ánh sáng
          xanh. Chúng cũng giúp ngăn ngừa các bệnh về mắt như đục thủy tinh thể,
          thoái hóa điểm vàng do lão hóa. Ngoài ra, cơ thể con người chuyển đổi
          beta-carotein trong rau lá xanh thành vitamin A, giảm nguy cơ mắc bệnh
          quáng gà.
          <br />
        </p>
        <div className="tieuDe">
          3. Kiểm soát cân nặng
          <br />
        </div>
        <p>
          Rau lá xanh rất ít calo, nhiều dinh dưỡng. Chúng là một trong số ít
          thực phẩm bạn có thể ăn nhiều mà vẫn giảm cân. Vì vậy, chúng được
          khuyến khích bổ sung vào bữa ăn hàng ngày, đặc biệt là bữa trưa để
          kiểm soát trọng lượng cơ thể dễ dàng hơn.
          <br />
        </p>
        <div className="tieuDe">
          4. Rau xanh có chứa nhiều chất dinh dưỡng tốt cho sức khỏe mà bạn nên
          ăn hàng ngày.
          <br />
        </div>
        <p>
          Bạn cần ăn rau xanh hàng ngày vì chúng cung cấp lượng vitamin, khoáng
          chất cần thiết cho cơ thể. Có một số loại vitamin được lưu trữ trong
          cơ thể để sử dụng cho tương lai, nhưng một số loại thì không. Các loại
          vitamin nhóm B như vitamin B1, B2, B3, B5, B6, B12, biotin, choline,
          axit folic và vitamin C là những loại vitamin tan trong nước, không
          thể lưu trữ trong cơ thể và cần bổ sung hàng ngày. Trong khi đó, rau
          xanh là nguồn thực phẩm phong phú cho một hỗn hợp đầy đủ các loại
          vitamin tan trong nước này.
          <br />
        </p>
        <div className="tieuDe">
          5.Tốt cho xương khớp
          <br />
        </div>
        <p>
          Theo thời gian, xương khớp có xu hướng trở nên yếu hơn, đặc biệt là
          phụ nữ, dễ mắc các bệnh loãng xương hay nội tiết. Rau xanh chứa hàm
          lượng canxi, vitamin K cao, có khả năng củng cố xương, cải thiện mật
          độ xương, làm chúng dày và khỏe mạnh hơn.
          <br />
        </p>
      </div>
      <div className="tieuDe">
        6. Ngăn ngừa ung thư
        <br />
      </div>
      <p>
        Một số nghiên cứu cho thấy tác động của chế độ ăn uống giàu rau xanh có
        thể phòng chống ung thư. Chúng chứa nhiều chất chống oxy hóa,
        carotenoids, flavonoids giúp chống lại các bệnh ung thư dạ dày, ruột, da
        và ung thư vú. Thường xuyên tiêu thụ bông cải xanh, cải bruxen, bắp cải
        kích thích cơ thể sản xuất ra các hợp chất chống ung thư như indoles,
        sulforaphane, isothiocyanates...
        <br />
      </p>
      <div className="tieuDe">
        6. Giảm nguy cơ mắc bệnh tiểu đường
        <br />
      </div>
      <p>
        Rất nhiều loại rau xanh như rau bina, cải xoăn có nồng độ polyphenol và
        các chất chống oxy hóa cao, những hợp chất hữu ích trong việc ngăn ngừa
        bệnh tiểu đường loại 2.
        <br />
      </p>
      <div className="tieuDe">
        7. Phòng chống bệnh tim
        <br />
      </div>
      <p>
        Một số loại rau như rau cải xanh, bắp cải... chứa lượng cholesterol
        thấp, đồng thời có lượng beta-carotene cao, rất tốt cho sức khỏe tim
        mạch, ngăn ngừa các vấn đề về tim.
      </p>
    </div>
  );
}

export default CenterPage;
