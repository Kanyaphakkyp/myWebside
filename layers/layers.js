var wms_layers = [];


        var lyr_StamenTonerLite_0 = new ol.layer.Tile({
            'title': 'Stamen Toner Lite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_pl_tambon_3 = new ol.format.GeoJSON();
var features_pl_tambon_3 = format_pl_tambon_3.readFeatures(json_pl_tambon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_tambon_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_tambon_3.addFeatures(features_pl_tambon_3);
var lyr_pl_tambon_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl_tambon_3, 
                style: style_pl_tambon_3,
                interactive: true,
                title: '<img src="styles/legend/pl_tambon_3.png" /> pl_tambon'
            });
var format_pl_amphoe_4 = new ol.format.GeoJSON();
var features_pl_amphoe_4 = format_pl_amphoe_4.readFeatures(json_pl_amphoe_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_amphoe_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_amphoe_4.addFeatures(features_pl_amphoe_4);
var lyr_pl_amphoe_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl_amphoe_4, 
                style: style_pl_amphoe_4,
                interactive: true,
    title: 'pl_amphoe<br />\
    <img src="styles/legend/pl_amphoe_4_0.png" /> อ.ชาติตระการ<br />\
    <img src="styles/legend/pl_amphoe_4_1.png" /> อ.นครไทย<br />\
    <img src="styles/legend/pl_amphoe_4_2.png" /> อ.เนินมะปราง<br />\
    <img src="styles/legend/pl_amphoe_4_3.png" /> อ.บางกระทุ่ม<br />\
    <img src="styles/legend/pl_amphoe_4_4.png" /> อ.บางระกำ<br />\
    <img src="styles/legend/pl_amphoe_4_5.png" /> อ.พรหมพิราม<br />\
    <img src="styles/legend/pl_amphoe_4_6.png" /> อ.เมืองพิษณุโลก<br />\
    <img src="styles/legend/pl_amphoe_4_7.png" /> อ.วังทอง<br />\
    <img src="styles/legend/pl_amphoe_4_8.png" /> อ.วัดโบสถ์<br />\
    <img src="styles/legend/pl_amphoe_4_9.png" /> <br />'
        });
var format_pl_stream_5 = new ol.format.GeoJSON();
var features_pl_stream_5 = format_pl_stream_5.readFeatures(json_pl_stream_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_stream_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_stream_5.addFeatures(features_pl_stream_5);
var lyr_pl_stream_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl_stream_5, 
                style: style_pl_stream_5,
                interactive: true,
                title: '<img src="styles/legend/pl_stream_5.png" /> pl_stream'
            });
var format_pl_transportation_6 = new ol.format.GeoJSON();
var features_pl_transportation_6 = format_pl_transportation_6.readFeatures(json_pl_transportation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_transportation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_transportation_6.addFeatures(features_pl_transportation_6);
var lyr_pl_transportation_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl_transportation_6, 
                style: style_pl_transportation_6,
                interactive: true,
                title: '<img src="styles/legend/pl_transportation_6.png" /> pl_transportation'
            });
var format_pl_village_7 = new ol.format.GeoJSON();
var features_pl_village_7 = format_pl_village_7.readFeatures(json_pl_village_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_village_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_village_7.addFeatures(features_pl_village_7);
var lyr_pl_village_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl_village_7, 
                style: style_pl_village_7,
                interactive: true,
                title: '<img src="styles/legend/pl_village_7.png" /> pl_village'
            });

lyr_StamenTonerLite_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_pl_tambon_3.setVisible(true);lyr_pl_amphoe_4.setVisible(true);lyr_pl_stream_5.setVisible(true);lyr_pl_transportation_6.setVisible(true);lyr_pl_village_7.setVisible(true);
var layersList = [lyr_StamenTonerLite_0,lyr_GoogleSatelliteHybrid_1,lyr_OSMStandard_2,lyr_pl_tambon_3,lyr_pl_amphoe_4,lyr_pl_stream_5,lyr_pl_transportation_6,lyr_pl_village_7];
lyr_pl_tambon_3.set('fieldAliases', {'AREA': 'AREA', 'TAM_CODE': 'TAM_CODE', 'TAM_NAM_T': 'TAM_NAM_T', 'AMP_CODE': 'AMP_CODE', 'AMP_NAM_T': 'AMP_NAM_T', 'AMP_NAM_E': 'AMP_NAM_E', });
lyr_pl_amphoe_4.set('fieldAliases', {'AREA': 'AREA', 'AMP_CODE': 'AMP_CODE', 'AMP_NAM_T': 'AMP_NAM_T', 'AMP_NAM_E': 'AMP_NAM_E', 'PROV_CODE': 'PROV_CODE', });
lyr_pl_stream_5.set('fieldAliases', {'LENGTH': 'LENGTH', 'STR_ID': 'STR_ID', 'STR_NAM_T': 'STR_NAM_T', 'STR_NAM_E': 'STR_NAM_E', 'LOCAL_NAM': 'LOCAL_NAM', 'STR_TYPE': 'STR_TYPE', });
lyr_pl_transportation_6.set('fieldAliases', {'LENGTH': 'LENGTH', 'TRANS_TYP': 'TRANS_TYP', 'TYP_T': 'TYP_T', 'NAME_T': 'NAME_T', 'NAME_E': 'NAME_E', 'TranNo': 'TranNo', 'TranTyp_n': 'TranTyp_n', });
lyr_pl_village_7.set('fieldAliases', {'NRD_CODE': 'NRD_CODE', 'VILL_CODE': 'VILL_CODE', 'VILL_NAM_T': 'VILL_NAM_T', 'PROV_CODE': 'PROV_CODE', 'AMP_CODE': 'AMP_CODE', 'TAM_CODE': 'TAM_CODE', });
lyr_pl_tambon_3.set('fieldImages', {'AREA': '', 'TAM_CODE': '', 'TAM_NAM_T': '', 'AMP_CODE': '', 'AMP_NAM_T': '', 'AMP_NAM_E': '', });
lyr_pl_amphoe_4.set('fieldImages', {'AREA': 'TextEdit', 'AMP_CODE': 'TextEdit', 'AMP_NAM_T': 'TextEdit', 'AMP_NAM_E': 'TextEdit', 'PROV_CODE': 'TextEdit', });
lyr_pl_stream_5.set('fieldImages', {'LENGTH': 'TextEdit', 'STR_ID': 'TextEdit', 'STR_NAM_T': 'TextEdit', 'STR_NAM_E': 'TextEdit', 'LOCAL_NAM': 'TextEdit', 'STR_TYPE': 'TextEdit', });
lyr_pl_transportation_6.set('fieldImages', {'LENGTH': 'TextEdit', 'TRANS_TYP': 'TextEdit', 'TYP_T': 'TextEdit', 'NAME_T': 'TextEdit', 'NAME_E': 'TextEdit', 'TranNo': 'Range', 'TranTyp_n': 'Range', });
lyr_pl_village_7.set('fieldImages', {'NRD_CODE': '', 'VILL_CODE': '', 'VILL_NAM_T': '', 'PROV_CODE': '', 'AMP_CODE': '', 'TAM_CODE': '', });
lyr_pl_tambon_3.set('fieldLabels', {'AREA': 'no label', 'TAM_CODE': 'no label', 'TAM_NAM_T': 'no label', 'AMP_CODE': 'no label', 'AMP_NAM_T': 'no label', 'AMP_NAM_E': 'no label', });
lyr_pl_amphoe_4.set('fieldLabels', {'AREA': 'no label', 'AMP_CODE': 'no label', 'AMP_NAM_T': 'no label', 'AMP_NAM_E': 'no label', 'PROV_CODE': 'no label', });
lyr_pl_stream_5.set('fieldLabels', {'LENGTH': 'no label', 'STR_ID': 'no label', 'STR_NAM_T': 'no label', 'STR_NAM_E': 'no label', 'LOCAL_NAM': 'no label', 'STR_TYPE': 'no label', });
lyr_pl_transportation_6.set('fieldLabels', {'LENGTH': 'no label', 'TRANS_TYP': 'no label', 'TYP_T': 'no label', 'NAME_T': 'no label', 'NAME_E': 'no label', 'TranNo': 'no label', 'TranTyp_n': 'no label', });
lyr_pl_village_7.set('fieldLabels', {'NRD_CODE': 'no label', 'VILL_CODE': 'no label', 'VILL_NAM_T': 'no label', 'PROV_CODE': 'no label', 'AMP_CODE': 'no label', 'TAM_CODE': 'no label', });
lyr_pl_village_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});