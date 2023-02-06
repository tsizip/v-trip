// import locationss from "./travel";

function clgt() {
     // hdtt
     document.getElementById('activity1').innerHTML = 'With professionalism, always providing the best travel services, V-TRIP is very happy to receive a lot of love, affection, as well as trust and satisfaction from the Youth Union of Long Tho Secondary School during the tour. Phan Thiet 2 days - 1 night.'
     document.getElementById('activity2').innerHTML = 'With the meticulous, investment in shuttle convoy with modern equipment, careful care from the staff and guides of V-TRIP has brought new and quality products and services. with professional service style. V-TRIP is pleased to accompany you on your next trips.'

     document.getElementById('activity3').innerHTML = 'Immerse yourself in the summer with Ho Tram tour. With a team of professional and dedicated guides, along with the quality of services from tourist cars to resorts, V-Trip has brought you a memorable trip to Gia Dinh High School.'

     document.getElementById('activity4').innerHTML = 'V-Trip always pays special attention to customers feelings. Therefore, each of your trips V-Trip always puts quality first.'

     // ft
     document.getElementById("ft-5").style.display = "block";
     document.getElementById("ft-4").style.display = "none";
     document.getElementById("ft-1").innerHTML = "ABOUT US";
     document.getElementById("ft-2").innerHTML = "Training of high-quality human resources based on basis of experience and technology, researching scient application and transferring knowledge so as to meet the social demand, international integration and sustainable development.";

     document.getElementById("ft-3").innerHTML = "V-TRIP VIETNAM GROUP";



     document.getElementById("ft-kt").innerHTML = "CONNECTION";

     document.getElementById('dulich-dl').innerHTML = 'TOURISM'
     document.getElementById('noxh').innerHTML = 'Social Housing'
     document.getElementById('noxh-crs').innerHTML = 'Social Housing'
     document.getElementById('noxh-ct-crs').innerHTML = 'Investment, planning and construction of social housing projects combined with commercial housing'
     document.getElementById('noxh-ct').innerHTML = "With the goal of sustainable development, V-Trip understands the importance of environmental protection in the process of designing, constructing and implementing Social Housing Projects, projects that share ideas, support and connectivity. The first projects built by V-Trip will serve the poor working class, accounting for 80% of Vietnam's population..."

     // mien nam
     var pgg0 = document.querySelectorAll('.pgg0');
     for (var i = 0; i < pgg0.length; i++) {
          pgg0[i].innerHTML = 'TOUR IN NORTHERN VIETNAM';
     }
     document.querySelector('.contentpgg0').innerHTML = 'Beauty spots in Northern Vietnam attract tourists by the stunning and imposing natural scenery. Northern is regarded as a cradle of long-standing history and culture in Viet Nam. It is also a tourist attraction that preserves natural beauty.'

     // mien trung
     var pgg1 = document.querySelectorAll('.pgg1');
     for (var i = 0; i < pgg1.length; i++) {
          pgg1[i].innerHTML = 'TOUR IN CENTRAL VIETNAM';
     }
     document.querySelector('.contentpgg1').innerHTML = 'Central Vietnam recorded a great deal of important evidence, so this place created a lot of UNESCO World Heritage Sites.Food culture in Central Vietnam is also a “beauty” that attracts customers and conquers even most fastidious “God”.'

     // mien nam
     var pgg2 = document.querySelectorAll('.pgg2');
     for (var i = 0; i < pgg2.length; i++) {
          pgg2[i].innerHTML = 'TOUR IN SOUTHERN VIETNAM';
     }
     document.querySelector('.contentpgg2').innerHTML = 'Visitors will be experienced a river trip with the Floating Market, or Cat Tien and Tram Chim National Park. Visitors will have a lot of practical experiences in traditional villages which are preserved and stored.'

     // tay nguyen
     var pgg3 = document.querySelectorAll('.pgg3');
     for (var i = 0; i < pgg3.length; i++) {
          pgg3[i].innerHTML = 'TOUR IN CENTRAL HIGHLANDS OF VIETNAM';
     }
     document.querySelector('.contentpgg3').innerHTML = 'Central Highlands of Vietnam is a unique option for your vacation. Tourists will be contemplated the splendor of Dray Nur waterfall, which is the largest and prettiest waterfall in Vietnam’s Central Highlands. Moreover, in Buon Don, you can ride an elephant and take part in the Gong festival.'


     // bien dao
     var pgg4 = document.querySelectorAll('.pgg4');
     for (var i = 0; i < pgg4.length; i++) {
          pgg4[i].innerHTML = 'TOUR ON SEA AND ISLAND';
     }
     document.querySelector('.contentpgg4').innerHTML = 'On hot sunny days, it is ideal for individuals who want to immerse themselves in the pristine water of seas and open space of islands. You can immerse yourself in cool sea water as if you can relieve stress and break the swelter of summer days, or even annoyance in your heart.'

     // lien tuyen
     var pgg5 = document.querySelectorAll('.pgg5');
     for (var i = 0; i < pgg5.length; i++) {
          pgg5[i].innerHTML = 'INTERLINE TOUR';
     }
     document.querySelector('.contentpgg5').innerHTML = 'Interline traveling is a program in which we can explore a variety of different countries on the same tour and allow us to gain experience and have much more benefits. A journey with a lot of destinations will bring you fascinating experiences such as beauty spots, along with unique art and culture.'
}
// chuyển thành tiếng Anh
var translateToEN = function () {
     //     header
     // console.log(languageChange);
     clgt();


     document.getElementById("textlogo").innerHTML = "V-TRIP VIETNAM GROUP";

     document.getElementById("chungtoi").innerHTML = "ABOUT V-TRIP";
     document.getElementById("dropdownMenuButton").innerHTML = "MAIN BUSINESS LINES";
     document.getElementById("dl").innerHTML = "Tourism";

     // document.getElementById("dl2").innerHTML = "Tourism";
     document.getElementById("bds").innerHTML = "Real Estate";
     document.getElementById("lkdt").innerHTML = "Training associate";
     document.getElementById("tcsk").innerHTML = "Event management";
     document.getElementById("kddt").innerHTML = "Business - Investment";
     document.getElementById("xnk").innerHTML = "Import and Export";
     document.getElementById("doitac").innerHTML = "OUR PARTNERS";
     // thông tin liên hệ
     document.getElementById("lienhe").innerHTML = "CONTACT US";
     document.getElementById("ndtn").innerHTML = "MESSAGE CONTENT";
     document.getElementById("itemY").style.display = "block";
     document.getElementById("itemX").style.display = "none";

     document.getElementById("ttlh").style.display = "none";
     document.getElementById("ttlh2").style.display = "block";
     document.getElementById("ttlhlh").innerHTML = "Contact";
     document.getElementById("ttlh_vpdd").innerHTML = "Representative Office";
     document.getElementById("vpdd").innerHTML = "51 Goldhill Plaza #07-10/11 Singapore 308900";
     document.getElementById("ttlh_vpgd").innerHTML = "Trading Office";
     document.getElementById("ttlhad").innerHTML = "Night Market, Huynh Van Nghe street, Hiep Phuoc town, Nhon Trach district, Dong Nai province.";
     document.getElementById("ttlhcn1").innerHTML = "Dong Nai 1 branch:";
     document.getElementById("ttlhcn11").innerHTML = "No. 983, Hung Vuong street, hamlet 3 Long Tho, Nhon Trach district, Dong Nai province";

     document.getElementById("ttlhts").innerHTML = "Headquarters";
     document.getElementById("ttlhts11").innerHTML = "No. 86, street 11, Cityland residential area, ward 10, Go Vap district, Ho Chi Minh city";
     document.getElementById("ttlhcn2").innerHTML = "The warehouse";
     document.getElementById("ttlhcn21").innerHTML = "13 cluster, Dat Moi hamlet, Long Thanh district, Dong Nai province";

     document.getElementById("kns").innerHTML = "Agricultural Warehouse";
     document.getElementById("kns2").innerHTML = "14th Street, Hoa Long Commune, City, Ba Ria city, Vung Tau";

     document.getElementById("ttlhcnla").innerHTML = "Long An branch";
     document.getElementById("ttlhcnla1").innerHTML = "Hau Nghia town, Duc Hoa district, Long An province";
     document.getElementById("ttlhvt").innerHTML = "Ba Ria – Vung Tau branch";
     document.getElementById("ttlhvt1").innerHTML = "No. 966, Pham Hung street, Ba Ria city, Vung Tau province";
     // carousel
     document.getElementById("crsdl").innerHTML = "Tourism";
     document.getElementById("crsdl1").innerHTML = "V-TRIP executes the mission of companionship with customers to Explore The Quintessence Of Life as well as experience the unique, novel, qualified, and distinct tourist attractions.";
     document.getElementById("crslkdt").innerHTML = "Training associate";
     document.getElementById("kcn-crs").innerHTML = "INDUSTRIAL AREA";
     document.getElementById("kcn-crs-ct").innerHTML = "Investment, planning, construction of industrial park infrastructure, joint venture in Singapore, Qatar, Malaysia, India";
     document.getElementById("crslkdt1").innerHTML = "V-TRIP executes the investment corporation and training associate with Institutions and top universities in Vietnam.";

     document.getElementById("crstcsk").innerHTML = "Event management";
     document.getElementById("crstcsk1").innerHTML = "V-TRIP will always accompany you with professionalism and reasonable price from Event Ideation to Event management, Personnel Supply, and Performing Equipment.";

     document.getElementById("crskddt").innerHTML = "Business - Investment";
     document.getElementById("crskddt1").innerHTML = "V-Trip continues to promote, improve and enhance the quality as well as the operational efficiency. The Business – Investment segment is a significant ecosystem.";

     document.getElementById("crsxnk").innerHTML = "Import and Export";
     document.getElementById("crsxnk1").innerHTML = "V-TRIP develops continuously into one of the top international commerce, import and export in Vietnam. Moreover, we exploit and optimize the value of Vietnamese products to bring a high competitiveness in the international market.";

     // intro
     document.getElementById("infotext").style.display = "none";
     document.getElementById("infotext1").style.display = "block";

     // liên kết đào tạo
     
     document.getElementById("lkdt1").innerHTML = "Training associate";
     document.getElementById("ctnh").innerHTML = "SHORT-TIME PROGRAMS:";

     document.getElementById("ctnh1").style.display = "none";
     document.getElementById("ctnh2").style.display = "block";
     document.getElementById("ctdh").style.display = "none";
     document.getElementById("ctdh1").style.display = "block";

     // tổ chức sự kiện
     document.getElementById("sk-tcsk").innerHTML = "EVENT MANAGEMENT";
     document.getElementById("sk-tcsk1").style.display = "none";
     document.getElementById("sk-tcsk2").style.display = "block";
     document.getElementById("link1").style.display = "none";
     document.getElementById("link2").style.display = "block";
     document.getElementById("link3").style.display = "none";
     document.getElementById("link4").style.display = "block";

     // kinh doanh đầu tư
     document.getElementById("kd-kddt").innerHTML = "BUSINESS – INVESTMENT";
     document.getElementById("kd-kddt1").style.display = "none";
     document.getElementById("kd-kddt2").style.display = "block";

     document.getElementById("impact-item1").style.display = "none";
     document.getElementById("impact-item2").style.display = "block";
     document.getElementById("impact-item3").style.display = "none";
     document.getElementById("impact-item4").style.display = "block";
     document.getElementById("impact-item5").style.display = "none";
     document.getElementById("impact-item6").style.display = "block";

     // xuất nhập khẩu
     document.getElementById("xnk-xnk").innerHTML = "IMPORTING AND EXPORTING ";
     document.getElementById("xnk-xnk1").style.display = "none";
     document.getElementById("xnk-xnk2").style.display = "block";

     // trụ sở chi nhánh
     document.getElementById("ts-cn").innerHTML = "ACTUAL ACTIVITY";

     document.getElementById("linklink1").style.display = "none";
     document.getElementById("linklink2").style.display = "block";
     document.getElementById("linklink3").style.display = "none";
     document.getElementById("linklink4").style.display = "block";
     document.getElementById("linklink5").style.display = "none";
     document.getElementById("linklink6").style.display = "block";
     document.getElementById("linklink7").style.display = "none";
     document.getElementById("linklink8").style.display = "block";
     document.getElementById("linklink9").style.display = "none";
     document.getElementById("linklink10").style.display = "block";
     document.getElementById("linklink11").style.display = "none";
     document.getElementById("linklink12").style.display = "block";

     // hoat dong thuc te




}

// console.log(locationss)