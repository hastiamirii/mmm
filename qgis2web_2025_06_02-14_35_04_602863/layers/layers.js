var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_hospital_1 = new ol.format.GeoJSON();
var features_hospital_1 = format_hospital_1.readFeatures(json_hospital_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospital_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospital_1.addFeatures(features_hospital_1);
var lyr_hospital_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hospital_1, 
                style: style_hospital_1,
                popuplayertitle: 'hospital',
                interactive: true,
                title: '<img src="styles/legend/hospital_1.png" /> hospital'
            });
var format_taxiandbus_2 = new ol.format.GeoJSON();
var features_taxiandbus_2 = format_taxiandbus_2.readFeatures(json_taxiandbus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_taxiandbus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_taxiandbus_2.addFeatures(features_taxiandbus_2);
var lyr_taxiandbus_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_taxiandbus_2, 
                style: style_taxiandbus_2,
                popuplayertitle: 'taxi and bus',
                interactive: true,
                title: '<img src="styles/legend/taxiandbus_2.png" /> taxi and bus'
            });
var format_atashneshani_3 = new ol.format.GeoJSON();
var features_atashneshani_3 = format_atashneshani_3.readFeatures(json_atashneshani_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_atashneshani_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_atashneshani_3.addFeatures(features_atashneshani_3);
var lyr_atashneshani_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_atashneshani_3, 
                style: style_atashneshani_3,
                popuplayertitle: 'atashneshani',
                interactive: true,
                title: '<img src="styles/legend/atashneshani_3.png" /> atashneshani'
            });
var format_pompbenzin_4 = new ol.format.GeoJSON();
var features_pompbenzin_4 = format_pompbenzin_4.readFeatures(json_pompbenzin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pompbenzin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pompbenzin_4.addFeatures(features_pompbenzin_4);
var lyr_pompbenzin_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pompbenzin_4, 
                style: style_pompbenzin_4,
                popuplayertitle: 'pomp benzin',
                interactive: true,
                title: '<img src="styles/legend/pompbenzin_4.png" /> pomp benzin'
            });
var format_bazar_5 = new ol.format.GeoJSON();
var features_bazar_5 = format_bazar_5.readFeatures(json_bazar_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bazar_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bazar_5.addFeatures(features_bazar_5);
var lyr_bazar_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bazar_5, 
                style: style_bazar_5,
                popuplayertitle: 'bazar',
                interactive: true,
                title: '<img src="styles/legend/bazar_5.png" /> bazar'
            });
var format_masjed_6 = new ol.format.GeoJSON();
var features_masjed_6 = format_masjed_6.readFeatures(json_masjed_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masjed_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masjed_6.addFeatures(features_masjed_6);
var lyr_masjed_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_masjed_6, 
                style: style_masjed_6,
                popuplayertitle: 'masjed',
                interactive: true,
                title: '<img src="styles/legend/masjed_6.png" /> masjed'
            });
var format_edarat_7 = new ol.format.GeoJSON();
var features_edarat_7 = format_edarat_7.readFeatures(json_edarat_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_edarat_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_edarat_7.addFeatures(features_edarat_7);
var lyr_edarat_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_edarat_7, 
                style: style_edarat_7,
                popuplayertitle: 'edarat',
                interactive: true,
                title: '<img src="styles/legend/edarat_7.png" /> edarat'
            });
var format_sinama_8 = new ol.format.GeoJSON();
var features_sinama_8 = format_sinama_8.readFeatures(json_sinama_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sinama_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sinama_8.addFeatures(features_sinama_8);
var lyr_sinama_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sinama_8, 
                style: style_sinama_8,
                popuplayertitle: 'sinama',
                interactive: true,
                title: '<img src="styles/legend/sinama_8.png" /> sinama'
            });
var format_school_9 = new ol.format.GeoJSON();
var features_school_9 = format_school_9.readFeatures(json_school_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_school_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_school_9.addFeatures(features_school_9);
var lyr_school_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_school_9, 
                style: style_school_9,
                popuplayertitle: 'school',
                interactive: true,
                title: '<img src="styles/legend/school_9.png" /> school'
            });
var format_ketabkhane_10 = new ol.format.GeoJSON();
var features_ketabkhane_10 = format_ketabkhane_10.readFeatures(json_ketabkhane_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ketabkhane_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ketabkhane_10.addFeatures(features_ketabkhane_10);
var lyr_ketabkhane_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ketabkhane_10, 
                style: style_ketabkhane_10,
                popuplayertitle: 'ketabkhane',
                interactive: true,
                title: '<img src="styles/legend/ketabkhane_10.png" /> ketabkhane'
            });
var format_parkvafazayesabz_11 = new ol.format.GeoJSON();
var features_parkvafazayesabz_11 = format_parkvafazayesabz_11.readFeatures(json_parkvafazayesabz_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parkvafazayesabz_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parkvafazayesabz_11.addFeatures(features_parkvafazayesabz_11);
var lyr_parkvafazayesabz_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parkvafazayesabz_11, 
                style: style_parkvafazayesabz_11,
                popuplayertitle: 'park va fazaye sabz',
                interactive: true,
                title: '<img src="styles/legend/parkvafazayesabz_11.png" /> park va fazaye sabz'
            });
var format_parking_12 = new ol.format.GeoJSON();
var features_parking_12 = format_parking_12.readFeatures(json_parking_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parking_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parking_12.addFeatures(features_parking_12);
var lyr_parking_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parking_12, 
                style: style_parking_12,
                popuplayertitle: 'parking',
                interactive: true,
                title: '<img src="styles/legend/parking_12.png" /> parking'
            });
var format_meydanbar_13 = new ol.format.GeoJSON();
var features_meydanbar_13 = format_meydanbar_13.readFeatures(json_meydanbar_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_meydanbar_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_meydanbar_13.addFeatures(features_meydanbar_13);
var lyr_meydanbar_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_meydanbar_13, 
                style: style_meydanbar_13,
                popuplayertitle: 'meydan bar',
                interactive: true,
                title: '<img src="styles/legend/meydanbar_13.png" /> meydan bar'
            });
var format_daneshgah_14 = new ol.format.GeoJSON();
var features_daneshgah_14 = format_daneshgah_14.readFeatures(json_daneshgah_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_daneshgah_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_daneshgah_14.addFeatures(features_daneshgah_14);
var lyr_daneshgah_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_daneshgah_14, 
                style: style_daneshgah_14,
                popuplayertitle: 'daneshgah',
                interactive: true,
                title: '<img src="styles/legend/daneshgah_14.png" /> daneshgah'
            });
var format_gym_15 = new ol.format.GeoJSON();
var features_gym_15 = format_gym_15.readFeatures(json_gym_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gym_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gym_15.addFeatures(features_gym_15);
var lyr_gym_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gym_15, 
                style: style_gym_15,
                popuplayertitle: 'gym',
                interactive: true,
                title: '<img src="styles/legend/gym_15.png" /> gym'
            });
var format_bank_16 = new ol.format.GeoJSON();
var features_bank_16 = format_bank_16.readFeatures(json_bank_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bank_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bank_16.addFeatures(features_bank_16);
var lyr_bank_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bank_16, 
                style: style_bank_16,
                popuplayertitle: 'bank',
                interactive: true,
                title: '<img src="styles/legend/bank_16.png" /> bank'
            });
var format_helaleahmar_17 = new ol.format.GeoJSON();
var features_helaleahmar_17 = format_helaleahmar_17.readFeatures(json_helaleahmar_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_helaleahmar_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_helaleahmar_17.addFeatures(features_helaleahmar_17);
var lyr_helaleahmar_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_helaleahmar_17, 
                style: style_helaleahmar_17,
                popuplayertitle: 'helale ahmar',
                interactive: true,
                title: '<img src="styles/legend/helaleahmar_17.png" /> helale ahmar'
            });
var format_edareabvafazelab_18 = new ol.format.GeoJSON();
var features_edareabvafazelab_18 = format_edareabvafazelab_18.readFeatures(json_edareabvafazelab_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_edareabvafazelab_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_edareabvafazelab_18.addFeatures(features_edareabvafazelab_18);
var lyr_edareabvafazelab_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_edareabvafazelab_18, 
                style: style_edareabvafazelab_18,
                popuplayertitle: 'edare ab va fazelab',
                interactive: true,
                title: '<img src="styles/legend/edareabvafazelab_18.png" /> edare ab va fazelab'
            });
var format_police_19 = new ol.format.GeoJSON();
var features_police_19 = format_police_19.readFeatures(json_police_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_police_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_police_19.addFeatures(features_police_19);
var lyr_police_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_police_19, 
                style: style_police_19,
                popuplayertitle: 'police',
                interactive: true,
                title: '<img src="styles/legend/police_19.png" /> police'
            });
var format_mokhaberat_20 = new ol.format.GeoJSON();
var features_mokhaberat_20 = format_mokhaberat_20.readFeatures(json_mokhaberat_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mokhaberat_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mokhaberat_20.addFeatures(features_mokhaberat_20);
var lyr_mokhaberat_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mokhaberat_20, 
                style: style_mokhaberat_20,
                popuplayertitle: 'mokhaberat',
                interactive: true,
                title: '<img src="styles/legend/mokhaberat_20.png" /> mokhaberat'
            });
var format_edaremanabetabii_21 = new ol.format.GeoJSON();
var features_edaremanabetabii_21 = format_edaremanabetabii_21.readFeatures(json_edaremanabetabii_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_edaremanabetabii_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_edaremanabetabii_21.addFeatures(features_edaremanabetabii_21);
var lyr_edaremanabetabii_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_edaremanabetabii_21, 
                style: style_edaremanabetabii_21,
                popuplayertitle: 'edare manabe tabii',
                interactive: true,
                title: '<img src="styles/legend/edaremanabetabii_21.png" /> edare manabe tabii'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_hospital_1.setVisible(true);lyr_taxiandbus_2.setVisible(true);lyr_atashneshani_3.setVisible(true);lyr_pompbenzin_4.setVisible(true);lyr_bazar_5.setVisible(true);lyr_masjed_6.setVisible(true);lyr_edarat_7.setVisible(true);lyr_sinama_8.setVisible(true);lyr_school_9.setVisible(true);lyr_ketabkhane_10.setVisible(true);lyr_parkvafazayesabz_11.setVisible(true);lyr_parking_12.setVisible(true);lyr_meydanbar_13.setVisible(true);lyr_daneshgah_14.setVisible(true);lyr_gym_15.setVisible(true);lyr_bank_16.setVisible(true);lyr_helaleahmar_17.setVisible(true);lyr_edareabvafazelab_18.setVisible(true);lyr_police_19.setVisible(true);lyr_mokhaberat_20.setVisible(true);lyr_edaremanabetabii_21.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_hospital_1,lyr_taxiandbus_2,lyr_atashneshani_3,lyr_pompbenzin_4,lyr_bazar_5,lyr_masjed_6,lyr_edarat_7,lyr_sinama_8,lyr_school_9,lyr_ketabkhane_10,lyr_parkvafazayesabz_11,lyr_parking_12,lyr_meydanbar_13,lyr_daneshgah_14,lyr_gym_15,lyr_bank_16,lyr_helaleahmar_17,lyr_edareabvafazelab_18,lyr_police_19,lyr_mokhaberat_20,lyr_edaremanabetabii_21];
lyr_hospital_1.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_taxiandbus_2.set('fieldAliases', {'name': 'name', });
lyr_atashneshani_3.set('fieldAliases', {'name': 'name', });
lyr_pompbenzin_4.set('fieldAliases', {'name': 'name', });
lyr_bazar_5.set('fieldAliases', {'name': 'name', });
lyr_masjed_6.set('fieldAliases', {'name': 'name', });
lyr_edarat_7.set('fieldAliases', {'name': 'name', });
lyr_sinama_8.set('fieldAliases', {'name': 'name', });
lyr_school_9.set('fieldAliases', {'name': 'name', });
lyr_ketabkhane_10.set('fieldAliases', {'name': 'name', });
lyr_parkvafazayesabz_11.set('fieldAliases', {'name': 'name', });
lyr_parking_12.set('fieldAliases', {'name': 'name', });
lyr_meydanbar_13.set('fieldAliases', {'name': 'name', });
lyr_daneshgah_14.set('fieldAliases', {'name': 'name', });
lyr_gym_15.set('fieldAliases', {'name': 'name', });
lyr_bank_16.set('fieldAliases', {'name': 'name', });
lyr_helaleahmar_17.set('fieldAliases', {'name': 'name', });
lyr_edareabvafazelab_18.set('fieldAliases', {'name': 'name', });
lyr_police_19.set('fieldAliases', {'name': 'name', });
lyr_mokhaberat_20.set('fieldAliases', {'name': 'name', });
lyr_edaremanabetabii_21.set('fieldAliases', {'name': 'name', });
lyr_hospital_1.set('fieldImages', {'id': '', 'name': '', });
lyr_taxiandbus_2.set('fieldImages', {'name': '', });
lyr_atashneshani_3.set('fieldImages', {'name': '', });
lyr_pompbenzin_4.set('fieldImages', {'name': '', });
lyr_bazar_5.set('fieldImages', {'name': '', });
lyr_masjed_6.set('fieldImages', {'name': '', });
lyr_edarat_7.set('fieldImages', {'name': '', });
lyr_sinama_8.set('fieldImages', {'name': '', });
lyr_school_9.set('fieldImages', {'name': '', });
lyr_ketabkhane_10.set('fieldImages', {'name': '', });
lyr_parkvafazayesabz_11.set('fieldImages', {'name': '', });
lyr_parking_12.set('fieldImages', {'name': '', });
lyr_meydanbar_13.set('fieldImages', {'name': '', });
lyr_daneshgah_14.set('fieldImages', {'name': '', });
lyr_gym_15.set('fieldImages', {'name': '', });
lyr_bank_16.set('fieldImages', {'name': '', });
lyr_helaleahmar_17.set('fieldImages', {'name': '', });
lyr_edareabvafazelab_18.set('fieldImages', {'name': '', });
lyr_police_19.set('fieldImages', {'name': '', });
lyr_mokhaberat_20.set('fieldImages', {'name': '', });
lyr_edaremanabetabii_21.set('fieldImages', {'name': '', });
lyr_hospital_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_taxiandbus_2.set('fieldLabels', {'name': 'no label', });
lyr_atashneshani_3.set('fieldLabels', {'name': 'no label', });
lyr_pompbenzin_4.set('fieldLabels', {'name': 'no label', });
lyr_bazar_5.set('fieldLabels', {'name': 'no label', });
lyr_masjed_6.set('fieldLabels', {'name': 'no label', });
lyr_edarat_7.set('fieldLabels', {'name': 'no label', });
lyr_sinama_8.set('fieldLabels', {'name': 'no label', });
lyr_school_9.set('fieldLabels', {'name': 'no label', });
lyr_ketabkhane_10.set('fieldLabels', {'name': 'no label', });
lyr_parkvafazayesabz_11.set('fieldLabels', {'name': 'no label', });
lyr_parking_12.set('fieldLabels', {'name': 'no label', });
lyr_meydanbar_13.set('fieldLabels', {'name': 'no label', });
lyr_daneshgah_14.set('fieldLabels', {'name': 'no label', });
lyr_gym_15.set('fieldLabels', {'name': 'no label', });
lyr_bank_16.set('fieldLabels', {'name': 'no label', });
lyr_helaleahmar_17.set('fieldLabels', {'name': 'no label', });
lyr_edareabvafazelab_18.set('fieldLabels', {'name': 'no label', });
lyr_police_19.set('fieldLabels', {'name': 'no label', });
lyr_mokhaberat_20.set('fieldLabels', {'name': 'no label', });
lyr_edaremanabetabii_21.set('fieldLabels', {'name': 'no label', });
lyr_edaremanabetabii_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});