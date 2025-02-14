var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_reasdeQuilombolasshp_1 = new ol.format.GeoJSON();
var features_reasdeQuilombolasshp_1 = format_reasdeQuilombolasshp_1.readFeatures(json_reasdeQuilombolasshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasdeQuilombolasshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasdeQuilombolasshp_1.addFeatures(features_reasdeQuilombolasshp_1);
var lyr_reasdeQuilombolasshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasdeQuilombolasshp_1, 
                style: style_reasdeQuilombolasshp_1,
                popuplayertitle: 'Áreas de Quilombolas.shp',
                interactive: true,
                title: '<img src="styles/legend/reasdeQuilombolasshp_1.png" /> Áreas de Quilombolas.shp'
            });

lyr_OSMStandard_0.setVisible(true);lyr_reasdeQuilombolasshp_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_reasdeQuilombolasshp_1];
lyr_reasdeQuilombolasshp_1.set('fieldAliases', {'cd_quilomb': 'cd_quilomb', 'cd_sr': 'cd_sr', 'nr_process': 'nr_process', 'nm_comunid': 'nm_comunid', 'nm_municip': 'nm_municip', 'cd_uf': 'cd_uf', 'dt_publica': 'dt_publica', 'dt_public1': 'dt_public1', 'nr_familia': 'nr_familia', 'dt_titulac': 'dt_titulac', 'nr_area_ha': 'nr_area_ha', 'nr_perimet': 'nr_perimet', 'cd_sipra': 'cd_sipra', 'ob_descric': 'ob_descric', 'st_titulad': 'st_titulad', 'dt_decreto': 'dt_decreto', 'tp_levanta': 'tp_levanta', 'nr_escalao': 'nr_escalao', 'area_calc_': 'area_calc_', 'perimetro_': 'perimetro_', 'esfera': 'esfera', 'fase': 'fase', 'responsave': 'responsave', });
lyr_reasdeQuilombolasshp_1.set('fieldImages', {'cd_quilomb': 'TextEdit', 'cd_sr': 'Hidden', 'nr_process': 'Hidden', 'nm_comunid': 'TextEdit', 'nm_municip': 'TextEdit', 'cd_uf': 'TextEdit', 'dt_publica': 'TextEdit', 'dt_public1': 'TextEdit', 'nr_familia': 'Hidden', 'dt_titulac': 'Hidden', 'nr_area_ha': 'TextEdit', 'nr_perimet': 'TextEdit', 'cd_sipra': 'Hidden', 'ob_descric': 'TextEdit', 'st_titulad': 'Hidden', 'dt_decreto': 'Hidden', 'tp_levanta': 'Hidden', 'nr_escalao': 'Hidden', 'area_calc_': 'TextEdit', 'perimetro_': 'TextEdit', 'esfera': 'TextEdit', 'fase': 'TextEdit', 'responsave': 'TextEdit', });
lyr_reasdeQuilombolasshp_1.set('fieldLabels', {'cd_quilomb': 'no label', 'nm_comunid': 'no label', 'nm_municip': 'header label - always visible', 'cd_uf': 'no label', 'dt_publica': 'no label', 'dt_public1': 'no label', 'nr_area_ha': 'no label', 'nr_perimet': 'no label', 'ob_descric': 'no label', 'area_calc_': 'no label', 'perimetro_': 'no label', 'esfera': 'no label', 'fase': 'no label', 'responsave': 'no label', });
lyr_reasdeQuilombolasshp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});