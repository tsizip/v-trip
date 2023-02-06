// export default locationss
const locationss = [
     {
          link: '../tourMB.html',
          title: 'TOUR  MIỀN BẮC',
          // title2: 'TOUR MIỀN BẮC',
          content: 'Danh lam thắng cảnh miền Bắc hấp dẫn du khách bởi khung cảnh thiên nhiên tuyệt đẹp và hùng vĩ. Miền Bắc được xem là cái nôi văn hóa lịch sử lâu đời của Việt Nam, cũng là nơi lưu giữ nhiều vẻ đẹp của mẹ thiên nhiên, làm say đắm lòng du khách.',

     },
     {
          link: '../tourMT.html',
          title: 'TOUR  MIỀN TRUNG',
          // title2: 'TOUR MIỀN TRUNG',
          content: 'Miền Trung ghi nhận nhiều chứng tích quan trọng, vì thế đã tạo nên nhiều Di sản được UNESCO công nhận. Văn hóa ẩm thực tại miền Trung cũng là một “nét đẹp” quyết rũ bước chân du khách, chinh phục cả những vị “thượng đế" khó tính nhất.',

     },
     {
          link: '../tourMN.html',
          title: 'TOUR  MIỀN NAM',
          // title2: 'TOUR MIỀN NAM',
          content: 'Đến với tour du lịch Miền Nam du khách sẽ được trải nghiệm du lịch sông nước với Chợ Nổi, tham quan Vườn Quốc gia Cát Tiên, Vườn Quốc Gia Tràm Chim,... Trải nghiệm thực tế tại các làng nghề truyền thống đang được lưu giữ và bảo tồn.',

     },
     {
          link: '../tourTN.html',
          title: 'TOUR TÂY NGUYÊN',
          // title2: 'TOUR TÂY NGUYÊN',
          content: 'Du lịch Tây Nguyên. Mảnh đất Tây Nguyên sẽ là sự lựa chọn độc đáo cho chuyến hành trình nghỉ dưỡng của du khách. Du khách sẽ có dịp chiêm ngưỡng vẻ đẹp Thác DrayNur - ngọn thác lớn và đẹp nhất Tây Nguyên, trải nghiệm cưỡi voi tại Buôn Đôn và thưởng thức chương trình biểu diễn Cồng chiêng.',

     },
     {
          link: '../tourBD.html',
          title: 'TOUR BIỂN ĐẢO',
          // title2: 'TOUR BIỂN ĐẢO',
          content: 'Thật tuyệt vời cho những ai được đắm mình trong làn nước trong xanh của biển cả và sự thoáng mát của đảo vào những ngày nắng nóng. Làn nước biển mát lạnh như có phép màu có thể làm giải tỏa, tan biến đi cái nực nội của ngày hè và cả sự bực bội, khó chịu trong lòng du khách.',

     },
     {
          link: '../tourLT.html',
          title: 'TOUR LIÊN TUYẾN',
          // title2: 'TOUR LIÊN TUYẾN',
          content: 'Du lịch liên tuyến là chương trình khám phá nhiều nước khác nhau trong cùng lịch trình tour, khách được trải nghiệm và hưởng nhiều lợi ích hơn. Một hành trình nhiều điểm đến sẽ cho quý khách những trải nghiệm thú vị với những danh lam thắng cảnh và văn hóa nghệ thuật độc đáo trong cùng một chuyến đi.',

     },

];



function renderTour() {
     const parent = document.querySelector('.khung-location');
     var tour = locationss.map(function (tour, index) {
          return `
          <div  class="col-12 col-sm-6 col-md-4 col-cus col1 ">
          <a class="linkLocation" href="${tour.link}" target="_blank">
              <div class="item grid1">
                  <p  class="pg1 pgg${index}">${tour.title}</p>
              </div>
              <div class="item overlay overlay1">
                  <p class="pgg${index}">${tour.title}</p>
                  <p class="contentpgg${index}">${tour.content}</p>
                  </div>
                  </a>
              </div>
                  `
     })
     parent.innerHTML = tour.join('')
}
function start() {
     renderTour();
}
start();