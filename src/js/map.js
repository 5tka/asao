$(document).ready(function(){

    function initialize() {
        //получаем наш div куда будем карту добавлять
        var mapCanvas = document.getElementById('map');
        // задаем параметры карты
        var mapOptions = {
            //Это центр куда спозиционируется наша карта при загрузке
            center: new google.maps.LatLng(55.68848702 , 37.53671318),
            //увеличение под которым будет карта, от 0 до 18
            // 0 - минимальное увеличение - карта мира
            // 18 - максимально детальный масштаб
            zoom: 17,
            scrollwheel: false,
            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"},{"weight":"0.01"},{"gamma":"1"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"color":"#919191"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#939393"},{"gamma":"0.50"},{"weight":"0.01"},{"lightness":"-40"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":"2"},{"lightness":"0"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#fafafa"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#e1e1e1"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"color":"#c6e7b9"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"color":"#bcf0cf"},{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#c6e7b9"}]},{"featureType":"poi.park","elementType":"labels.text","stylers":[{"color":"#686464"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":"0"},{"saturation":"0"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":"0"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#777777"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"},{"saturation":"0"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#f4f4f4"},{"weight":"1.6"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#777777"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"weight":"0.01"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#b2daea"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"saturation":"3"},{"weight":"0.01"},{"gamma":"1.05"},{"lightness":"0"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"color":"#ffffff"}]}]
            //Тип карты - обычная дорожная карта
            // mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        //Инициализируем карту
        var map = new google.maps.Map(mapCanvas, mapOptions);

        //Объявляем массив с нашими местами и маркерами
        var markers = [],
            myPlaces = [];
        //Добавляем места в массив
        myPlaces.push(new Place('ул. Строителей, 25 офис 121', 55.688407, 37.5326675, 'г. Санкт-Петербург'));
        //Теперь добавим маркеры для каждого места
        for (var i = 0, n = myPlaces.length; i < n; i++) {

                    var companyImage = new google.maps.MarkerImage('js/marker.png',
                        new google.maps.Size(100,50),
                        new google.maps.Point(0,0),
                        new google.maps.Point(50,50)
                    );

            var marker = new google.maps.Marker({
                //расположение на карте
                position: new google.maps.LatLng(myPlaces[i].latitude, myPlaces[i].longitude),
                map: map,
                icon: companyImage,
                //То что мы увидим при наведении мышкой на маркер
                title: myPlaces[i].name
            });
            //Добавим попап, который будет появляться при клике на маркер
            var infowindow = new google.maps.InfoWindow({
                content: '<h5>' + myPlaces[i].name + '</h5><br/>' + myPlaces[i].description
            });
            //привязываем попап к маркеру на карте
            makeInfoWindowEvent(map, infowindow, marker);
            markers.push(marker);
        }
    }
    function makeInfoWindowEvent(map, infowindow, marker) {
        //Привязываем событие КЛИК к маркеру
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    }
    //Это класс для удобного манипулирования местами
    function Place(name, latitude, longitude, description){
        this.name = name;  // название
        this.latitude = latitude;  // широта
        this.longitude = longitude;  // долгота
        this.description = description;  // описание места
    }
    //Когда документ загружен полностью - запускаем инициализацию карты.
    google.maps.event.addDomListener(window, 'load', initialize);

});