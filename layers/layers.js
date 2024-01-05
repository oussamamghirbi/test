var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EPCI_CCPP_1 = new ol.format.GeoJSON();
var features_EPCI_CCPP_1 = format_EPCI_CCPP_1.readFeatures(json_EPCI_CCPP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCI_CCPP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCI_CCPP_1.addFeatures(features_EPCI_CCPP_1);
var lyr_EPCI_CCPP_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPCI_CCPP_1, 
                style: style_EPCI_CCPP_1,
                interactive: true,
                title: '<img src="styles/legend/EPCI_CCPP_1.png" /> EPCI_CCPP'
            });
var format_Photos_2 = new ol.format.GeoJSON();
var features_Photos_2 = format_Photos_2.readFeatures(json_Photos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photos_2.addFeatures(features_Photos_2);
var lyr_Photos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Photos_2, 
                style: style_Photos_2,
                interactive: true,
                title: '<img src="styles/legend/Photos_2.png" /> Photos'
            });

lyr_OSMStandard_0.setVisible(true);lyr_EPCI_CCPP_1.setVisible(true);lyr_Photos_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_EPCI_CCPP_1,lyr_Photos_2];
lyr_EPCI_CCPP_1.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_Photos_2.set('fieldAliases', {'id': 'id', 'Photos': 'Photos', 'Lieu': 'Lieu', });
lyr_EPCI_CCPP_1.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_Photos_2.set('fieldImages', {'id': 'TextEdit', 'Photos': 'ExternalResource', 'Lieu': '', });
lyr_EPCI_CCPP_1.set('fieldLabels', {'ID': 'inline label', 'CODE_SIREN': 'inline label', 'NATURE': 'inline label', 'NOM': 'inline label', 'DATE_CREAT': 'inline label', 'DATE_MAJ': 'inline label', 'DATE_APP': 'inline label', 'DATE_CONF': 'inline label', 'ID_AUT_ADM': 'inline label', });
lyr_Photos_2.set('fieldLabels', {'id': 'no label', 'Photos': 'inline label', 'Lieu': 'inline label', });
lyr_Photos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});