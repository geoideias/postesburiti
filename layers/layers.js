var wms_layers = [];


        var lyr_GooglecnNormal_0 = new ol.layer.Tile({
            'title': 'Google.cn Normal',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://wa.me/5563999644565">Cabral Engenharia e Gestão Territorial</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://wa.me/5563999644565">Cabral Engenharia e Gestão Territorial</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_WazeWorld_2 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_Postes_3 = new ol.format.GeoJSON();
var features_Postes_3 = format_Postes_3.readFeatures(json_Postes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Postes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postes_3.addFeatures(features_Postes_3);
var lyr_Postes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Postes_3, 
                style: style_Postes_3,
                interactive: true,
    title: 'Postes<br />\
    <img src="styles/legend/Postes_3_0.png" /> 1 Lâmpada de LED<br />\
    <img src="styles/legend/Postes_3_1.png" /> 2  Lâmpadas de LED<br />\
    <img src="styles/legend/Postes_3_2.png" /> 4 Lâmpadas de LED<br />'
        });

lyr_GooglecnNormal_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_WazeWorld_2.setVisible(true);lyr_Postes_3.setVisible(true);
var layersList = [lyr_GooglecnNormal_0,lyr_GoogleSatellite_1,lyr_WazeWorld_2,lyr_Postes_3];
lyr_Postes_3.set('fieldAliases', {'PONTO': 'PONTO', 'RUA/AVENIDA': 'RUA/AVENIDA', 'QUATIDADE': 'QUATIDADE', 'X': 'X', 'Y': 'Y', 'LÂMPADAS RETIRADAS': 'LÂMPADAS RETIRADAS', 'LÂMPADAS INSTALADAS': 'LÂMPADAS INSTALADAS', });
lyr_Postes_3.set('fieldImages', {'PONTO': 'TextEdit', 'RUA/AVENIDA': 'TextEdit', 'QUATIDADE': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'LÂMPADAS RETIRADAS': 'TextEdit', 'LÂMPADAS INSTALADAS': 'TextEdit', });
lyr_Postes_3.set('fieldLabels', {'PONTO': 'header label', 'RUA/AVENIDA': 'inline label', 'QUATIDADE': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'LÂMPADAS RETIRADAS': 'inline label', 'LÂMPADAS INSTALADAS': 'inline label', });
lyr_Postes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});