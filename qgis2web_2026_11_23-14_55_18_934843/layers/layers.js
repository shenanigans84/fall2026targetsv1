var wms_layers = [];


        var lyr_Esriworldstreetmap_0 = new ol.layer.Tile({
            'title': 'Esri world streetmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Newlyelectedverbalsupport_1 = new ol.format.GeoJSON();
var features_Newlyelectedverbalsupport_1 = format_Newlyelectedverbalsupport_1.readFeatures(json_Newlyelectedverbalsupport_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Newlyelectedverbalsupport_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Newlyelectedverbalsupport_1.addFeatures(features_Newlyelectedverbalsupport_1);
var lyr_Newlyelectedverbalsupport_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Newlyelectedverbalsupport_1, 
                style: style_Newlyelectedverbalsupport_1,
                popuplayertitle: 'Newly elected (verbal support)',
                interactive: true,
                title: '<img src="styles/legend/Newlyelectedverbalsupport_1.png" /> Newly elected (verbal support)'
            });
var format_Newlyelectedverbalopposition_2 = new ol.format.GeoJSON();
var features_Newlyelectedverbalopposition_2 = format_Newlyelectedverbalopposition_2.readFeatures(json_Newlyelectedverbalopposition_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Newlyelectedverbalopposition_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Newlyelectedverbalopposition_2.addFeatures(features_Newlyelectedverbalopposition_2);
var lyr_Newlyelectedverbalopposition_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Newlyelectedverbalopposition_2, 
                style: style_Newlyelectedverbalopposition_2,
                popuplayertitle: 'Newly elected (verbal opposition)',
                interactive: true,
                title: '<img src="styles/legend/Newlyelectedverbalopposition_2.png" /> Newly elected (verbal opposition)'
            });
var format_Retiring2027_3 = new ol.format.GeoJSON();
var features_Retiring2027_3 = format_Retiring2027_3.readFeatures(json_Retiring2027_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Retiring2027_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Retiring2027_3.addFeatures(features_Retiring2027_3);
var lyr_Retiring2027_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Retiring2027_3, 
                style: style_Retiring2027_3,
                popuplayertitle: 'Retiring 2027',
                interactive: true,
                title: '<img src="styles/legend/Retiring2027_3.png" /> Retiring 2027'
            });

var vectorTileUrl_NewlyElected2027UNDECIDED_4 = 'layers/NewlyElected2027UNDECIDED_4-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_NewlyElected2027UNDECIDED_4 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 4,
    url: vectorTileUrl_NewlyElected2027UNDECIDED_4,
    attributions: ' '
});
var lyr_NewlyElected2027UNDECIDED_4 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_NewlyElected2027UNDECIDED_4,
    sourceType: 'pbf',
    popuplayertitle: 'Newly Elected 2027 (UNDECIDED)',
    extent: ol.proj.transformExtent([-13540252.531628583, 2968834.263491342, -8066644.337575205, 5654574.869138653], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_NewlyElected2027UNDECIDED_4,
    title: '<img src="styles/legend/NewlyElected2027UNDECIDED_4.png" /> Newly Elected 2027 (UNDECIDED)'
});

var format_NewlyElected2027ALL_5 = new ol.format.GeoJSON();
var features_NewlyElected2027ALL_5 = format_NewlyElected2027ALL_5.readFeatures(json_NewlyElected2027ALL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewlyElected2027ALL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewlyElected2027ALL_5.addFeatures(features_NewlyElected2027ALL_5);
var lyr_NewlyElected2027ALL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewlyElected2027ALL_5, 
                style: style_NewlyElected2027ALL_5,
                popuplayertitle: 'Newly Elected 2027 (ALL)',
                interactive: true,
                title: '<img src="styles/legend/NewlyElected2027ALL_5.png" /> Newly Elected 2027 (ALL)'
            });

var vectorTileUrl_Tier12026_6 = 'layers/Tier12026_6-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_Tier12026_6 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 4,
    url: vectorTileUrl_Tier12026_6,
    attributions: ' '
});
var lyr_Tier12026_6 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_Tier12026_6,
    sourceType: 'pbf',
    popuplayertitle: 'Tier 1 2026',
    extent: ol.proj.transformExtent([-13638958.856198033, 3203911.4417798775, -7452828.220063132, 6141594.293026147], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Tier12026_6,
    title: '<img src="styles/legend/Tier12026_6.png" /> Tier 1 2026'
});


var vectorTileUrl_Tier22026_7 = 'layers/Tier22026_7-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_Tier22026_7 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 4,
    url: vectorTileUrl_Tier22026_7,
    attributions: ' '
});
var lyr_Tier22026_7 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_Tier22026_7,
    sourceType: 'pbf',
    popuplayertitle: 'Tier 2 2026',
    extent: ol.proj.transformExtent([-17598584.126836017, 2422315.8528165836, -8252465.288137804, 6275284.584221341], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Tier22026_7,
    title: '<img src="styles/legend/Tier22026_7.png" /> Tier 2 2026'
});


lyr_Esriworldstreetmap_0.setVisible(true);lyr_Newlyelectedverbalsupport_1.setVisible(true);lyr_Newlyelectedverbalopposition_2.setVisible(true);lyr_Retiring2027_3.setVisible(true);lyr_NewlyElected2027UNDECIDED_4.setVisible(true);lyr_NewlyElected2027ALL_5.setVisible(true);lyr_Tier12026_6.setVisible(true);lyr_Tier22026_7.setVisible(true);
var layersList = [lyr_Esriworldstreetmap_0,lyr_Newlyelectedverbalsupport_1,lyr_Newlyelectedverbalopposition_2,lyr_Retiring2027_3,lyr_NewlyElected2027UNDECIDED_4,lyr_NewlyElected2027ALL_5,lyr_Tier12026_6,lyr_Tier22026_7];
lyr_Newlyelectedverbalsupport_1.set('fieldAliases', {'district_id': 'district_id', 'state': 'state', 'district': 'district', 'candidate': 'candidate', 'category': 'category', });
lyr_Newlyelectedverbalopposition_2.set('fieldAliases', {'district_id': 'district_id', 'state': 'state', 'district': 'district', 'candidate': 'candidate', 'category': 'category', });
lyr_Retiring2027_3.set('fieldAliases', {'district_id': 'district_id', 'state': 'state', 'district': 'district', 'candidate': 'candidate', 'category': 'category', });
lyr_NewlyElected2027UNDECIDED_4.set('fieldAliases', {'district_id': 'district_id', 'state': 'state', 'district': 'district', 'candidate': 'candidate', 'category': 'category', });
lyr_NewlyElected2027ALL_5.set('fieldAliases', {'district_id': 'district_id', 'state': 'state', 'district': 'district', 'candidate': 'candidate', 'category': 'category', });
lyr_Tier12026_6.set('fieldAliases', {'district_id': 'district_id', 'state': 'state', 'district': 'district', 'candidate': 'candidate', 'category': 'category', });
lyr_Tier22026_7.set('fieldAliases', {'district_id': 'district_id', 'state': 'state', 'district': 'district', 'candidate': 'candidate', 'category': 'category', });
lyr_Newlyelectedverbalsupport_1.set('fieldImages', {'district_id': 'TextEdit', 'state': 'TextEdit', 'district': 'TextEdit', 'candidate': 'TextEdit', 'category': 'TextEdit', });
lyr_Newlyelectedverbalopposition_2.set('fieldImages', {'district_id': 'TextEdit', 'state': 'TextEdit', 'district': 'TextEdit', 'candidate': 'TextEdit', 'category': 'TextEdit', });
lyr_Retiring2027_3.set('fieldImages', {'district_id': 'TextEdit', 'state': 'TextEdit', 'district': 'TextEdit', 'candidate': 'TextEdit', 'category': 'TextEdit', });
lyr_NewlyElected2027UNDECIDED_4.set('fieldImages', {'district_id': 'TextEdit', 'state': 'TextEdit', 'district': 'TextEdit', 'candidate': 'TextEdit', 'category': 'TextEdit', });
lyr_NewlyElected2027ALL_5.set('fieldImages', {'district_id': 'TextEdit', 'state': 'TextEdit', 'district': 'TextEdit', 'candidate': 'TextEdit', 'category': 'TextEdit', });
lyr_Tier12026_6.set('fieldImages', {'district_id': 'TextEdit', 'state': 'TextEdit', 'district': 'TextEdit', 'candidate': 'TextEdit', 'category': 'TextEdit', });
lyr_Tier22026_7.set('fieldImages', {'district_id': 'TextEdit', 'state': 'TextEdit', 'district': 'TextEdit', 'candidate': 'TextEdit', 'category': 'TextEdit', });
lyr_Newlyelectedverbalsupport_1.set('fieldLabels', {'district_id': 'no label', 'state': 'no label', 'district': 'no label', 'candidate': 'no label', 'category': 'no label', });
lyr_Newlyelectedverbalopposition_2.set('fieldLabels', {'district_id': 'no label', 'state': 'no label', 'district': 'no label', 'candidate': 'no label', 'category': 'no label', });
lyr_Retiring2027_3.set('fieldLabels', {'district_id': 'no label', 'state': 'no label', 'district': 'no label', 'candidate': 'no label', 'category': 'no label', });
lyr_NewlyElected2027UNDECIDED_4.set('fieldLabels', {'district_id': 'no label', 'state': 'no label', 'district': 'no label', 'candidate': 'no label', 'category': 'no label', });
lyr_NewlyElected2027ALL_5.set('fieldLabels', {'district_id': 'no label', 'state': 'no label', 'district': 'no label', 'candidate': 'no label', 'category': 'no label', });
lyr_Tier12026_6.set('fieldLabels', {'district_id': 'no label', 'state': 'no label', 'district': 'no label', 'candidate': 'no label', 'category': 'no label', });
lyr_Tier22026_7.set('fieldLabels', {'district_id': 'no label', 'state': 'no label', 'district': 'no label', 'candidate': 'no label', 'category': 'no label', });
lyr_Tier22026_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});