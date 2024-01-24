/*Google maps js*/
(function($){
    var theMap;
    function initMap() {

        // Properties Array
        var properties = [
            {
                address:"Quincy St, Brooklyn, NY, USA",
                featured:"<div class='label-wrap top-left'><label class='label label-primary'>For Sale</label></div>",
                icon:"images/map/pin-apartments.png",
                lat:"40.6879438",
                lng:"-73.94192980000003",
                price:"$876,000",
                prop_meta:"<li>Bed: 1</li><li>Baths: 2</li><li>Sq Ft: 1900</li>",
                retinaIcon:"images/map/pin-apartments.png",
                thumbnail:"<img src='http://placehold.it/385x258' alt='thumb'>",
                title:"Penthouse apartment",
                type:"Apartment",
                url:"/"
            },
            {
                address:"Metro Plaza Dr, Jersey City, NJ 07302, USA",
                featured:"<div class='label-wrap top-left'><label class='label label-primary'>For Sale</label></div>",
                icon:"images/map/pin-house.png",
                lat:"40.72305619999999",
                lng:"-74.03885300000002",
                price:"$3,700&#47;mo",
                prop_meta:"<li>Bed: 1</li><li>Baths: 2</li><li>Sq Ft: 1900</li>",
                retinaIcon:"images/map/pin-house.png",
                thumbnail:"<img src='http://placehold.it/385x258' alt='thumb'>",
                title:"Confortable apartment",
                type:"Apartment",
                url:"/"
            },
            {
                address:"New York, NY",
                featured:"<div class='label-wrap top-left'><label class='label label-primary'>For Sale</label></div>",
                icon:"images/map/pin-house.png",
                lat:"40.776786",
                lng:"-73.947145",
                price:"$3,700&#47;mo",
                prop_meta:"<li>Bed: 1</li><li>Baths: 2</li><li>Sq Ft: 1900</li>",
                retinaIcon:"images/map/pin-house.png",
                thumbnail:"<img src='http://placehold.it/385x258' alt='thumb'>",
                title:"Yorkville",
                type:"Apartment",
                url:"/"
            },
            {
                address:"Pennsylvania 18052",
                featured:"<div class='label-wrap top-left'><label class='label label-primary'>For Sale</label></div>",
                icon:"images/map/pin-apartments.png",
                lat:"40.616762",
                lng:"-75.491593",
                price:"$3,700&#47;mo",
                prop_meta:"<li>Bed: 1</li><li>Baths: 2</li><li>Sq Ft: 1900</li>",
                retinaIcon:"images/map/pin-apartments.png",
                thumbnail:"<img src='http://placehold.it/385x258' alt='thumb'>",
                title:"Fullerton Confortable apartment",
                type:"Villa",
                url:"/"
            },
            {
                address:"Pennsylvania, USA",
                featured:"<div class='label-wrap top-left'><label class='label label-primary'>For Sale</label></div>",
                icon:"images/map/pin-apartments.png",
                lat:"40.540491",
                lng:"-75.778932",
                price:"$3,700&#47;mo",
                prop_meta:"<li>Bed: 1</li><li>Baths: 2</li><li>Sq Ft: 1900</li>",
                retinaIcon:"images/map/pin-apartments.png",
                thumbnail:"<img src='http://placehold.it/385x258' alt='thumb'>",
                title:"Maxatawny Township",
                type:"Township",
                url:"/"
            },
            {
                address:"New Jersey 07740",
                featured:"<div class='label-wrap top-left'><label class='label label-primary'>For Sale</label></div>",
                icon:"images/map/pin-apartments.png",
                lat:"40.292994",
                lng:"-73.985206",
                price:"$3,700&#47;mo",
                prop_meta:"<li>Bed: 1</li><li>Baths: 2</li><li>Sq Ft: 1900</li>",
                retinaIcon:"images/map/pin-apartments.png",
                thumbnail:"<img src='http://placehold.it/385x258' alt='thumb'>",
                title:"Confortable and ample apartment",
                type:"Township",
                url:"/"
            },
            {
                address:"New Jersey 07762",
                featured:"<div class='label-wrap top-left'><label class='label label-primary'>For Sale</label></div>",
                icon:"images/map/pin-apartments.png",
                lat:"40.151437",
                lng:"-74.025032",
                price:"$3,700&#47;mo",
                prop_meta:"<li>Bed: 4</li><li>Baths: 4</li><li>Sq Ft: 2400</li>",
                retinaIcon:"images/map/pin-apartments.png",
                thumbnail:"<img src='http://placehold.it/385x258' alt='thumb'>",
                title:"Design place apartment",
                type:"Township",
                url:"/"
            },
            {
                address:"Weigelstown, Pennsylvania",
                featured:"<div class='label-wrap top-left'><label class='label label-primary'>For Sale</label></div>",
                icon:"images/map/pin-apartments.png",
                lat:"39.972617",
                lng:"-76.817785",
                price:"$3,700&#47;mo",
                prop_meta:"<li>Bed: 4</li><li>Baths: 4</li><li>Sq Ft: 2400</li>",
                retinaIcon:"images/map/pin-apartments.png",
                thumbnail:"<img src='http://placehold.it/385x258' alt='thumb'>",
                title:"Confortable apartment",
                type:"Township",
                url:"/"
            },
            {
                address:"Hallam, Pennsylvania 17406",
                featured:"<div class='label-wrap top-left'><label class='label label-primary'>For Sale</label></div>",
                icon:"images/map/pin-apartments.png",
                lat:"40.001323",
                lng:"-76.604516",
                price:"$3,700&#47;mo",
                prop_meta:"<li>Bed: 4</li><li>Baths: 4</li><li>Sq Ft: 2400</li>",
                retinaIcon:"images/map/pin-apartments.png",
                thumbnail:"<img src='http://placehold.it/385x258' alt='thumb'>",
                title:"Ample apartment at last floor",
                type:"Township",
                url:"/"
            }
        ];

        var myLatLng = new google.maps.LatLng(properties[0].lat,properties[0].lng);
        //var myLatLng = new google.maps.LatLng(40.082959,-75.225468);

        var ced_MapOptions = {
            zoom: 8,
            //maxZoom: 5,
            center: myLatLng,
            disableDefaultUI: true,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var theMap = new google.maps.Map(document.getElementById("map"), ced_MapOptions);

        var markers = [];
        var current_marker = 0;

        var mapBounds = new google.maps.LatLngBounds();

        for( i = 0; i < properties.length; i++ ) {
            //alert('ok');
            var marker_url = properties[i].icon;
            var marker_size = new google.maps.Size( 44, 56 );
            if( window.devicePixelRatio > 1.5 ) {
                if ( properties[i].retinaIcon ) {
                    marker_url = properties[i].retinaIcon;
                    marker_size = new google.maps.Size( 84, 106 );
                }
            }

            var marker_icon = {
                url: marker_url,
                size: marker_size,
                scaledSize: new google.maps.Size( 44, 56 ),
                origin: new google.maps.Point( 0, 0 ),
                anchor: new google.maps.Point( 7, 27 )
            };

            // Markers
            markers[i] = new google.maps.Marker({
                map: theMap,
                draggable: false,
                position: new google.maps.LatLng(properties[i].lat,properties[i].lng),
                icon: marker_icon,
                title: properties[i].title,
                animation: google.maps.Animation.DROP,
                visible: true
            });

            mapBounds.extend(markers[i].getPosition());

            var infoBoxText = document.createElement("div");
             infoBoxText.className = 'media property-item map-info-box';
             infoBoxText.innerHTML =
             '<div class="media-left">'+
                '<div class="item-media-thumb">'+ properties[i].featured +
                    '<span class="box-close"><i class="fa fa-close"></i></span>'+
                    '<a href="'+properties[i].url+'" tabindex="0">'+
                        properties[i].thumbnail +
                    '</a>'+
                    '<div class="item-media-title">'+
                        '<span class="item-type">'+properties[i].type +'</span>'+
                        '<span class="item-price">'+properties[i].price +'</span>'+
                    '</div>'+
                '</div>'+
             '</div>' +
             '<div class="media-body item-body">' +
                '<div class="item-body-inner">' +
                    '<div class="item-title-head">' +
                        '<h4 class="title"><a href="'+properties[i].url+'">'+properties[i].title+'</a></h4>' +
                        '<address class="item-address"><i class="fa fa-map-marker fa-right-5"></i>'+properties[i].address+'</address>' +
                    '</div>' +
                '</div>' +
             '</div>';


             var infoBoxOptions = {
                 content: infoBoxText,
                 disableAutoPan: true,
                 maxWidth: 0,
                 alignBottom: true,
                 pixelOffset: new google.maps.Size( -122, -45 ),
                 zIndex: null,
                 closeBoxMargin: "0",
                 closeBoxURL: "",
                 infoBoxClearance: new google.maps.Size( 1, 1 ),
                 isHidden: false,
                 pane: "floatPane",
                 enableEventPropagation: false
             };

             var infobox = new InfoBox( infoBoxOptions );

             attachInfoBoxToMarker( theMap, markers[i], infobox );

        }

        google.maps.event.addDomListener(document.getElementById('mapzoomIn'), 'click', function() {
            theMap.setZoom(theMap.getZoom() + 1);
        });
        google.maps.event.addDomListener(document.getElementById('mapzoomOut'), 'click', function() {
            theMap.setZoom(theMap.getZoom() - 1);
        });

        // Marker Clusters
        //if( googlemap_pin_cluster != 'no' ) {
        var markerClustererOptions = {
            ignoreHidden: true,
            maxZoom: parseInt(10),
            styles: [{
                textColor: '#ffffff',
                url: 'images/',
                height: 42,
                width: 42
            }]
        };

        var markerClusterer = new MarkerClusterer(theMap, markers, markerClustererOptions);

        //theMap.fitBounds(mapBounds);

        function attachInfoBoxToMarker( map, marker, infoBox ){
            marker.addListener('click', function() {
                var scale = Math.pow( 2, map.getZoom() );
                var offsety = ( (100/scale) || 0 );
                var projection = map.getProjection();
                var markerPosition = marker.getPosition();
                var markerScreenPosition = projection.fromLatLngToPoint( markerPosition );
                var pointHalfScreenAbove = new google.maps.Point( markerScreenPosition.x, markerScreenPosition.y - offsety );
                var aboveMarkerLatLng = projection.fromPointToLatLng( pointHalfScreenAbove );
                map.setCenter( aboveMarkerLatLng );
                google.maps.event.addListener(infoBox, 'domready', function() {
                    $('.box-close').on("click", function(e) {
                        e.preventDefault();
                        infoBox.close();
                    });
                });
                infoBox.close();
                infoBox.open( map, marker );
            });
        }

        function geolocate() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    theMap.setCenter(pos);
                    theMap.setZoom(15);
                });
            }
        }

        $("#map-geoLocation").on("click", function() {
            geolocate();
        });


        $('#ced-map-next').on("click", function(){
            current_marker++;
            if ( current_marker > markers.length ){
                current_marker = 1;
            }
            while( markers[current_marker-1].visible===false ){
                current_marker++;
                if ( current_marker > markers.length ){
                    current_marker = 1;
                }
            }
            if( theMap.getZoom() < 15 ){
                theMap.setZoom(15);
            }
            google.maps.event.trigger( markers[current_marker-1], 'click' );
        });

        $('#ced-map-prev').on("click", function(){
            current_marker--;
            if (current_marker < 1){
                current_marker = markers.length;
            }
            while( markers[current_marker-1].visible===false ){
                current_marker--;
                if ( current_marker > markers.length ){
                    current_marker = 1;
                }
            }
            if( theMap.getZoom() <15 ){
                theMap.setZoom(15);
            }
            google.maps.event.trigger( markers[current_marker-1], 'click');
        });
        $('#ced-map-full').on("click", function() {
            //google.maps.event.trigger(theMap, 'resize');
            if($(this).hasClass('active')== true){
                //alert('has');
                google.maps.event.trigger(theMap, 'resize');
                theMap.setOptions({
                    draggable: true
                });
            }else{
                //alert('not has');
                google.maps.event.trigger(theMap, 'resize');
                theMap.setOptions({
                    draggable: false
                });
            }

        });


        change_map_type = function(map_type){

            if(map_type==='roadmap'){
                theMap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
            }else if(map_type==='satellite'){
                theMap.setMapTypeId(google.maps.MapTypeId.SATELLITE);
            }else if(map_type==='hybrid'){
                theMap.setMapTypeId(google.maps.MapTypeId.HYBRID);
            }else if(map_type==='terrain'){
                theMap.setMapTypeId(google.maps.MapTypeId.TERRAIN);
            }
            return false;
        };

        google.maps.event.addListenerOnce(theMap, 'tilesloaded', function() {
            $('.ced-loader-wrap').hide();
        });

    }

    google.maps.event.addDomListener( window, 'load', initMap );
})(jQuery);