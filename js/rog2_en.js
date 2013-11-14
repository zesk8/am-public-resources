//Códigos y nombres de aeropuertos   

var modalRegions = [
	{	"regionKey": 1, 
		"regionName": "Mexico",
		"regionTitle": "Region México"
	},{
		"regionKey": 2, 
		"regionName": "USA & Canada",
		"regionTitle": "Region USA & Canada"
	},{
		"regionKey": 3, 
		"regionName": "Central America",
		"regionTitle": "Region Central America"
	},{
		"regionKey": 4, 
		"regionName": "South America",
		"regionTitle": "Region South America"
	},{
		"regionKey": 5, 
		"regionName": "Europe",
		"regionTitle": "Region Europe"
	},{
		"regionKey": 6, 
		"regionName": "Asia",
		"regionTitle": "Region Asia"
	},{
		"regionKey": 7, 
		"regionName": "The Caribbean",
		"regionTitle": "Region The Caribbean"
	}
];

var modalRegions_mlt = [
 {
   "regionKey": 2, 
   "regionName": "North America",
   "regionTitle": "Region North America"
 }
];

//Códigos y nombres de aeropuertos
var airports_mlt     = [
  {
  "key": "ALB",
  "label": "Albany    (ALB)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "ATL",
  "label": "Atlanta    (ATL)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "BWI",
  "label": "Baltimore    (BWI)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "BOS",
  "label": "Boston    (BOS)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "BRO",
  "label": "Brownsville  (BRO)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "ORD",
  "label": "Chicago - O'Hare    (ORD)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "CVG",
  "label": "Cincinnati    (CVG)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "DFW",
  "label": "Dallas - Fort Worth  (DFW)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','EZE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "DEN",
  "label": "Denver (DEN)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "DTW",
  "label": "Detroit - Metro (DTW)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "FAT",
  "label": "Fresno (FAT)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "BDL",
  "label": "Hartford Sprngfld (BDL)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "IAH",
  "label": "Houston - George Bush (IAH)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "MCI",
  "label": "Kansas City (MCI)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "LAS",
  "label": "Las Vegas (LAS)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "LAX",
  "label": "Los Angeles (LAX)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "MEM",
  "label": "Memphis (MEM)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "MIA",
  "label": "Miami (MIA)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "MSP",
  "label": "Minneapolis (MSP)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "BNA",
  "label": "Nashville (BNA)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "JFK",
  "label": "New York - John F Kennedy (JFK)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "MSY",
  "label": "Nueva Orleans (MSY)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "ONT",
  "label": "Ontario (ONT)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "MCO",
  "label": "Orlando (MCO)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "PHL",
  "label": "Philadelphia (PHL)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "PHX",
  "label": "Phoenix (PHX)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "PDX",
  "label": "Portland (PDX)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "RDU",
  "label": "Raleigh (RDU)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "RIC",
  "label": "Richmond (RIC)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "ROC",
  "label": "Rochester (ROC)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "SMF",
  "label": "Sacramento (SMF)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "SLC",
  "label": "Salt Lake City (SLC)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "SAT",
  "label": "San Antonio (SAT)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "SFO",
  "label": "San Francisco (SFO)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "STL",
  "label": "Sn Louis (STL)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "IAD",
  "label": "Washington-Dulles (IAD)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "YUL",
  "label": "Montreal Trudeau (YUL)",
  "country": "Canada",
  "countryCode": "CA",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
,  {
  "key": "YYZ",
  "label": "Toronto - Pearson  (YYZ)",
  "country": "Canada",
  "countryCode": "CA",
  "region": 2,
  "partner": 1,
  "depart": Array('ACA','BUE','CUN','GDL','GUA','HUX','MEX','MID','MZT','OAX','PVR','SAO','SJD','SJO','ZIH')
  }
];
//Códigos y nombres de aeropuertos
var airports = [
  {
  "key": "EZE",
  "label": "Buenos Aires - Ezeiza (EZE)",
  "country": "Argentina",
  "countryCode": "AR",
  "region": 4,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DGO','FAT','GDL','GUA','HMO','HUX','IAH','JFK','LAP','LAS','LAX','LMM','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PVG','PVR','REX','SAL','SAP','SAT','SFO','SJD','SLP','SLW','SMF','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CNF",
  "label": "Belo Horizonte  (CNF)",
  "country": "Brazil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "BSB",
  "label": "Brasilia  (BSB)",
  "country": "Brazil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "CWB",
  "label": "Curitiba  (CWB)",
  "country": "Brazil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "FLN ",
  "label": "Florianopolis  (FLN)",
  "country": "Brazil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "FOR ",
  "label": "Fortaleza (FOR)",
  "country": "Brazil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "POA",
  "label": "Porto Alegre  (POA)",
  "country": "Brazil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "REC",
  "label": "Recife  (REC)",
  "country": "Brazil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "GIG",
  "label": "Rio de Janeiro  (GIG)",
  "country": "Brazil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "GRU",
  "label": "Sao Paulo – Guarulho (GRU)",
  "country": "Brazil",
  "countryCode": "BR",
  "region": 4,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','FAT','GDL','GUA','HMO','HUX','IAH','JFK','LAP','LAS','LAX','LHR','LMM','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','ONT','ORD','PAZ','PHX','PVR','REX','SAL','SAP','SAT','SFO','SJD','SLP','SLW','SMF','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','YYZ','ZCL','ZIH','ZLO')
  }
,  {
  "key": "YUL",
  "label": "Montreal - Trudeau (YUL)",
  "country": "Canada",
  "countryCode": "CA",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','GUA','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','REX','SAP','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "YYZ",
  "label": "Toronto - Pearson  (YYZ)",
  "country": "Canada",
  "countryCode": "CA",
  "region": 2,
  "partner": 1,
  "depart": Array('GDL','GRU','LIM','MEX','SCL','SJO')
  }
,  {
  "key": "YVR",
  "label": "Vancouver (YVR)",
  "country": "Canada",
  "countryCode": "CA",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "CCP",
  "label": "Concepcion (CCP)",
  "country": "Chile",
  "countryCode": "CL",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "PUQ",
  "label": "Punta Arenas (PUQ)",
  "country": "Chile",
  "countryCode": "CL",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "SCL",
  "label": "Santiago (SCL)",
  "country": "Chile",
  "countryCode": "CL",
  "region": 4,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','FAT','GDL','HMO','HUX','IAH','JFK','LAP','LAS','LAX','LMM','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PVR','REX','SAL','SAP','SAT','SFO','SJD','SLP','SLW','SMF','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "PVG",
  "label": "Shanghai - Pudong (PVG)",
  "country": "China",
  "countryCode": "CN",
  "region": 6,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CEN','CJS','CME','CPE','CUL','CUN','CUU','DFW','DGO','EZE','GDL','GUA','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','REX','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "AXM",
  "label": "Armenia (AXM)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "BAQ",
  "label": "Barranquilla (BAQ)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "BOG",
  "label": "Bogota    (BOG)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','FAT','GDL','HMO','IAH','JFK','LAP','LAS','LAX','LHR','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PVG','PVR','REX','SAT','SFO','SJD','SLP','SMF','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "BGA",
  "label": "Bucaramanga (BGA)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "CLO",
  "label": "Cali (CLO)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "CTG",
  "label": "Cartagena (CTG)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "MDE",
  "label": "Medellin (MDE)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "PEI",
  "label": "Pereira (PEI)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "SJO",
  "label": "San Jose, CR (SJO)",
  "country": "Costa Rica",
  "countryCode": "CR",
  "region": 3,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','FAT','GDL','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LMM','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PVG','PVR','REX','SAT','SFO','SJD','SLP','SLW','SMF','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','YYZ','ZCL','ZIH','ZLO')
  }
,  {
  "key": "PRG",
  "label": "Praga (PRG)",
  "country": "Czech Republic",
  "countryCode": "CZ",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "UIO",
  "label": "Quito  (UIO)",
  "country": "Ecuador",
  "countryCode": "EC",
  "region": 4,
  "partner": 0,
  "depart": Array('ACA','BJX','CJS','CUL','CUN','CUU','DGO','GDL','HMO','IAH','JFK','LAP','LAS','LAX','MAD','MEX','MIA','MID','MTY','MZT','NRT','ORD','PVR','SAT','SJD','TAM','TIJ','TRC','VER','VSA','ZIH','ZLO')
  }
,  {
  "key": "SAL",
  "label": "San Salvador (SAL)",
  "country": "El Salvador",
  "countryCode": "SV",
  "region": 3,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','CDG','CJS','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LIM','MAM','MEX','MID','MLM','MTY','MZT','OAX','PVR','REX','SCL','SFO','SJD','SLP','TAM','TGZ','TIJ','TRC','VER','VSA','ZCL')
  }
,  {
  "key": "LYS",
  "label": "Lyon (LYS)",
  "country": "France",
  "countryCode": "FR",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "MRS",
  "label": "Marsella (MRS)",
  "country": "France",
  "countryCode": "FR",
  "region": 5,
  "partner": 0,
  "depart": Array('MEX')
  }
,  {
  "key": "NCE",
  "label": "Niza (NCE)",
  "country": "France",
  "countryCode": "FR",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "CDG",
  "label": "Paris - Charles de Gaulle  (CDG)",
  "country": "France",
  "countryCode": "FR",
  "region": 5,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DFW','DGO','EZE','GDL','GRU','HMO','IAH','JFK','LAP','LAX','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','OAX','ONT','ORD','PAZ','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "TLS",
  "label": "Toulouse (TLS)",
  "country": "France",
  "countryCode": "FR",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "FRA",
  "label": "Frankfurt (FRA)",
  "country": "Germany",
  "countryCode": "DE",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "GUA",
  "label": "Guatemala (GUA)",
  "country": "Guatemala",
  "countryCode": "GT",
  "region": 3,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CEN','CJS','CME','CPE','CUL','CUN','CUU','DFW','DGO','DTW','EZE','FAT','GDL','GRU','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ORD','PAZ','PVG','PVR','REX','SAT','SFO','SJD','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "SAP",
  "label": "San Pedro Sula (SAP)",
  "country": "Honduras",
  "countryCode": "HN",
  "region": 3,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DGO','EZE','FAT','GDL','GRU','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PVR','REX','SAT','SCL','SFO','SJD','SLP','SMF','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH')
  }
,  {
  "key": "MXP",
  "label": "Milan – Malpensa (MXP)",
  "country": "Italy",
  "countryCode": "IT",
  "region": 5,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX')
  }
,  {
  "key": "FCO",
  "label": "Roma - Fiumicino (FCO)",
  "country": "Italy",
  "countryCode": "IT",
  "region": 5,
  "partner": 1,
  "depart": Array('ATL','CUN','GDL','MEX')
  }
,  {
  "key": "NRT",
  "label": "Tokyo - Narita (NRT)",
  "country": "Japan",
  "countryCode": "JP",
  "region": 6,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DFW','DGO','EZE','GDL','GUA','HMO','IAH','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','REX','SAP','SAT','SCL','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','UIO','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "ACA",
  "label": "Acapulco  (ACA)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TLC','TRC','UIO','VER','VSA','YUL','ZCL','ZLO')
  }
,  {
  "key": "AGU",
  "label": "Aguascalientes    (AGU)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','ATL','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZIH','ZLO')
  }
,  {
  "key": "SJD",
  "label": "Cabo San Lucas    (SJD)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BDL','BJX','BNA','BOG','BOS','BWI','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','CVG','DEN','DFW','DGO','DTW','EZE','FAT','GDL','GRU','GUA','HMO','IAD','IAH','JFK','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCI','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJC','SJO','SLC','SLP','SLW','STL','TAM','TAP','TGZ','TIJ','TRC','UIO','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CPE",
  "label": "Campeche    (CPE)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CUN",
  "label": "Cancun    (CUN)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ALB','AMS','ATL','BDL','BJX','BNA','BOG','BOS','BWI','CDG','CEN','CJS','CME','CMH','CPE','CUL','CUU','DEN','DFW','DGO','DTW','EZE','FAT','FCO','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LGA','LHR','LIM','LMM','LPA','MAD','MAM','MCI','MCO','MEM','MEX','MIA','MID','MKE','MLM','MSP','MSY','MTT','MTY','MXL','MXP','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHL','PHX','PTY','PVG','PVR','RDU','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SJU','SLC','SLP','SLW','STL','TAM','TAP','TGZ','TIJ','TLC','TPA','TRC','UIO','VER','VSA','YUL','YYZ','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CUU",
  "label": "Chihuahua    (CUU)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PPE','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','SLW','TAM','TAP','TGZ','TIJ','TLC','TRC','UIO','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CME",
  "label": "Ciudad del Carmen (CME)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PVG','PVR','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CJS",
  "label": "Ciudad Juarez (CJS)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','SLW','TAM','TAP','TGZ','TIJ','TLC','TRC','UIO','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CEN",
  "label": "Ciudad Obregon (CEN)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PPE','PTY','PVG','PVR','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZIH')
  }
,  {
  "key": "CZM",
  "label": "Cozumel (CZM)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ATL')
  }
,  {
  "key": "CUL",
  "label": "Culiacan (CUL)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LTO','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PPE','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','SLW','TAM','TAP','TGZ','TIJ','TLC','TRC','UIO','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "DGO",
  "label": "Durango (DGO)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLW','TAM','TAP','TGZ','TIJ','TRC','UIO','VER','VSA','YUL','ZIH','ZLO')
  }
,  {
  "key": "GDL",
  "label": "Guadalajara (GDL)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ALB','ATL','BDL','BJX','BNA','BOG','BOS','BWI','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','CVG','DEN','DFW','DGO','DTW','EZE','FAT','FCO','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LGA','LHR','LIM','LMM','LRD','MAD','MAM','MCI','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MXP','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PBC','PHL','PHX','PPE','PTY','PVG','PVR','QRO','RDU','REX','SAL','SAP','SAT','SCL','SFO','SJC','SJD','SJO','SJU','SLC','SLP','SLW','SMF','STL','TAM','TAP','TGZ','TIJ','TLC','TRC','UIO','VER','VSA','YUL','YYZ','ZCL','ZIH')
  }
,  {
  "key": "HMO",
  "label": "Hermosillo (HMO)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PBC','PHX','PPE','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','UIO','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "HUX",
  "label": "Huatulco (HUX)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','CEN','CJS','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','HMO','IAD','IAH','LAP','LAS','LAX','LIM','LMM','MAD','MAM','MEX','MIA','MID','MLM','MTY','MXL','MZT','ORD','PAZ','PVR','REX','SCL','SFO','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH')
  }
,  {
  "key": "ZIH",
  "label": "Ixtapa Zihuatanejo (ZIH)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','UIO','VER','VSA','YUL','ZCL','ZLO')
  }
,  {
  "key": "LAP",
  "label": "La Paz (LAP)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJO','SLC','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','UIO','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "BJX",
  "label": "Leon Bajio (BJX)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','ATL','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLW','TAM','TAP','TGZ','TIJ','TLC','TRC','UIO','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "LTO",
  "label": "Loreto (LTO)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('CUL','JFK','LAX','MEX')
  }
,  {
  "key": "LMM",
  "label": "Los Mochis (LMM)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LIM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PPE','PVG','PVR','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "ZLO",
  "label": "Manzanillo (ZLO)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CJS','CME','CPE','CUL','CUN','CUU','DFW','DGO','DTW','EZE','FAT','GRU','GUA','HMO','IAH','JFK','LAP','LAS','LAX','LIM','LMM','MAD','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ORD','PAZ','PTY','PVG','REX','SAT','SCL','SFO','SJD','SJO','SLC','SLP','TAM','TAP','TGZ','TIJ','TRC','UIO','VER','VSA','YUL','ZCL','ZIH')
  }
,  {
  "key": "MAM",
  "label": "Matamoros (MAM)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','EZE','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LIM','LMM','MAD','MCO','MEX','MIA','MID','MLM','MTT','MTY','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','SAL','SAP','SAT','SCL','SFO','SJD','SJO','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZIH')
  }
,  {
  "key": "MZT",
  "label": "Mazatlan (MZT)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PPE','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','UIO','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MID",
  "label": "Merida (MID)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','UIO','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MXL",
  "label": "Mexicali (MXL)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAH','JFK','LAP','LAS','LAX','LIM','LMM','MAD','MCO','MEX','MIA','MID','MLM','MTT','MTY','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PBC','PHX','PTY','PVG','PVR','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MEX",
  "label": "Mexico City    (MEX)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','ACE','AGP','AGU','ALB','AMS','ANC','ATL','AXM','BAQ','BCN','BDL','BGA','BJX','BNA','BOG','BOS','BSB','BWI','CCP','CDG','CEN','CIX','CJS','CLO','CME','CMH','CNF','CPE','CTG','CUL','CUN','CUU','CUZ','CVG','CWB','DEN','DFW','DGO','DTW','EZE','FAT','FCO','FLN','FOR','FRA','GDL','GIG','GRU','GUA','HMO','HUX','IAD','IAH','ICN','IND','JFK','JUL','LAP','LAS','LAX','LGA','LHR','LIM','LIS','LMM','LPA','LRD','LTO','LYS','MAD','MAM','MCI','MCO','MDE','MIA','MID','MKE','MLM','MRS','MSP','MSY','MTT','MTY','MXL','MXP','MZT','NCE','NLD','NRT','OAX','ONT','ORD','ORF','PAZ','PDX','PEI','PEM','PHL','PHX','PMI','POA','PPE','PRG','PTY','PUQ','PVG','PVR','RDU','REC','REX','RIC','ROC','SAL','SAP','SAT','SCL','SEA','SFO','SJC','SJD','SJO','SJU','SLC','SLP','SLW','SMF','STL','SYR','TAM','TAP','TGZ','TIJ','TLS','TPA','TRC','UIO','VER','VGO','VLC','VSA','YUL','YVR','YYZ','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MTT",
  "label": "Minatitlan (MTT)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MTY",
  "label": "Monterrey (MTY)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','DTW','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PBC','PHX','PPE','PTY','PVG','PVR','QRO','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','TAM','TAP','TGZ','TIJ','TLC','TRC','UIO','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MLM",
  "label": "Morelia (MLM)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "NLD",
  "label": "Nuevo Laredo (NLD)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "OAX",
  "label": "Oaxaca (OAX)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "PAZ",
  "label": "Poza Rica (PAZ)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAH','JFK','LAP','LAS','LAX','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PHX','PTY','PVG','PVR','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "PBC",
  "label": "Puebla (PBC)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('GDL','HMO','LAS','MTY','MXL','VSA')
  }
,  {
  "key": "PPE",
  "label": "Puerto Peñasco (PPE)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('CEN','GDL','HMO','LAS')
  }
,  {
  "key": "PVR",
  "label": "Puerto Vallarta (PVR)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BDL','BJX','BOG','BWI','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','CVG','DEN','DFW','DGO','DTW','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','REX','SAL','SAN','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','SLW','STL','TAM','TAP','TGZ','TIJ','TLC','TRC','UIO','VER','VSA','YUL','ZCL','ZIH')
  }
,  {
  "key": "QRO",
  "label": "Queretaro (QRO)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('GDL','HMO','JFK','LAS','LAX','LRD','MIA','MTY','ORD','PHX','SAT','SFO','TAM')
  }
,  {
  "key": "REX",
  "label": "Reynosa (REX)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MCO','MEX','MIA','MID','MLM','MTT','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CUN",
  "label": "Riviera Maya (CUN)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ALB','AMS','ATL','BDL','BJX','BNA','BOG','BOS','BWI','CDG','CEN','CJS','CME','CMH','CPE','CUL','CUU','DEN','DFW','DGO','DTW','EZE','FAT','FCO','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LGA','LHR','LIM','LMM','LPA','MAD','MAM','MCI','MCO','MEM','MEX','MIA','MID','MKE','MLM','MSP','MSY','MTT','MTY','MXL','MXP','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHL','PHX','PTY','PVG','PVR','RDU','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SJU','SLC','SLP','SLW','STL','TAM','TAP','TGZ','TIJ','TLC','TPA','TRC','UIO','VER','VSA','YUL','YYZ','ZCL','ZIH','ZLO')
  }
,  {
  "key": "PVR",
  "label": "Riviera Nayarit (PVR)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BDL','BJX','BOG','BWI','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','CVG','DEN','DFW','DGO','DTW','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','REX','SAL','SAN','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','SLW','STL','TAM','TAP','TGZ','TIJ','TLC','TRC','UIO','VER','VSA','YUL','ZCL','ZIH')
  }
,  {
  "key": "SLW",
  "label": "Saltillo (SLW)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAX','LHR','LIM','LMM','MCO','MEX','MIA','MID','MLM','MTT','MXL','MZT','NRT','OAX','ORD','PAZ','PVG','PVR','SAT','SCL','SFO','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','VER','VSA','YUL','ZCL','ZIH')
  }
,  {
  "key": "SLP",
  "label": "San Luis Potosi (SLP)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','ATL','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZIH','ZLO')
  }
,  {
  "key": "TAM",
  "label": "Tampico (TAM)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAP','TGZ','TIJ','TRC','UIO','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "TAP",
  "label": "Tapachula (TAP)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "TIJ",
  "label": "Tijuana (TIJ)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','ICN','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PPE','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TRC','UIO','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "TLC",
  "label": "Toluca (TLC)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','BJX','CJS','CUL','CUN','CUU','GDL','JFK','LAX','LRD','MTY','ONT','PVR','SAT','SMF')
  }
,  {
  "key": "TRC",
  "label": "Torreon (TRC)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PPE','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','TAM','TAP','TGZ','TIJ','UIO','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "TGZ",
  "label": "Tuxtla Gutierrez (TGZ)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TIJ','TRC','VER','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "VER",
  "label": "Veracruz (VER)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','UIO','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "VSA",
  "label": "Villahermosa (VSA)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PBC','PHX','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TIJ','TRC','UIO','VER','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "ZCL",
  "label": "Zacatecas (ZCL)",
  "country": "Mexico",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','ATL','BJX','BOG','CDG','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZIH','ZLO')
  }
,  {
  "key": "AMS",
  "label": "Amsterdam    (AMS)",
  "country": "Netherlands",
  "countryCode": "NL",
  "region": 5,
  "partner": 1,
  "depart": Array('CUN','MEX')
  }
,  {
  "key": "PTY",
  "label": "Panama (PTY)",
  "country": "Panama",
  "countryCode": "PA",
  "region": 3,
  "partner": 1,
  "depart": Array('ACA','AGU','ATL','BJX','CEN','CJS','CPE','CUL','CUN','CUU','DGO','FAT','GDL','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LMM','MAM','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','ORD','PAZ','PVR','REX','SFO','SLP','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "AQP",
  "label": "Arequipa (AQP)",
  "country": "Peru",
  "countryCode": "PE",
  "region": 4,
  "partner": 1,
  "depart": Array('LAX')
  }
,  {
  "key": "CIX",
  "label": "Chiclayo  (CIX)",
  "country": "Peru",
  "countryCode": "PE",
  "region": 4,
  "partner": 1,
  "depart": Array('LAX','MEX')
  }
,  {
  "key": "CUZ",
  "label": "Cuzco (CUZ)",
  "country": "Peru",
  "countryCode": "PE",
  "region": 4,
  "partner": 1,
  "depart": Array('LAX','MEX')
  }
,  {
  "key": "JUL",
  "label": "Juliaca (JUL)",
  "country": "Peru",
  "countryCode": "PE",
  "region": 4,
  "partner": 1,
  "depart": Array('LAX','MEX')
  }
,  {
  "key": "LIM",
  "label": "Lima (LIM)",
  "country": "Peru",
  "countryCode": "PE",
  "region": 4,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','FAT','GDL','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PVG','PVR','REX','SAL','SAP','SAT','SFO','SJD','SLP','SLW','SMF','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','YYZ','ZCL','ZIH','ZLO')
  }
,  {
  "key": "PEM",
  "label": "Puerto Maldonado (PEM)",
  "country": "Peru",
  "countryCode": "PE",
  "region": 4,
  "partner": 1,
  "depart": Array('LAX','MEX')
  }
,  {
  "key": "LIS",
  "label": "Lisboa (LIS)",
  "country": "Portugal",
  "countryCode": "PT",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "SJU",
  "label": "San Juan (SJU)",
  "country": "Puerto Rico",
  "countryCode": "PR",
  "region": 7,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX')
  }
,  {
  "key": "ICN",
  "label": "Seul - Incheon (ICN)",
  "country": "Republic of  Korea ",
  "countryCode": "KR",
  "region": 6,
  "partner": 1,
  "depart": Array('MEX','TIJ')
  }
,  {
  "key": "BCN",
  "label": "Barcelona    (BCN)",
  "country": "Spain",
  "countryCode": "ES",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "LPA",
  "label": "Gran Canaria (LPA)",
  "country": "Spain",
  "countryCode": "ES",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "ACE",
  "label": "Lanzarote (ACE)",
  "country": "Spain",
  "countryCode": "ES",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "MAD",
  "label": "Madrid (MAD)",
  "country": "Spain",
  "countryCode": "ES",
  "region": 5,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','GDL','GUA','HMO','HUX','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','REX','SJD','SLP','TAM','TAP','TGZ','TIJ','TRC','UIO','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "AGP",
  "label": "Malaga (AGP)",
  "country": "Spain",
  "countryCode": "ES",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "PMI",
  "label": "Palma de Mallorca (PMI)",
  "country": "Spain",
  "countryCode": "ES",
  "region": 5,
  "partner": 1,
  "depart": Array('ATL','MEX')
  }
,  {
  "key": "VLC",
  "label": "Valencia (VLC)",
  "country": "Spain",
  "countryCode": "ES",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "VGO",
  "label": "Vigo (VGO)",
  "country": "Spain",
  "countryCode": "ES",
  "region": 5,
  "partner": 1,
  "depart": Array('ATL','MEX')
  }
,  {
  "key": "LHR",
  "label": "Londres - Heathrow (LHR)",
  "country": "United Kingdom",
  "countryCode": "GB",
  "region": 5,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CME','CUL','CUN','CUU','DFW','DGO','GDL','GRU','GUA','HMO','JFK','LAP','LAS','LAX','MCO','MEX','MIA','MID','MTT','MTY','MZT','NLD','OAX','ORD','PVR','REX','SJD','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH')
  }
,  {
  "key": "ALB",
  "label": "Albany    (ALB)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX')
  }
,  {
  "key": "ANC",
  "label": "Anchorage (ANC)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "ATL",
  "label": "Atlanta    (ATL)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','BOS','CEN','CJS','CME','CPE','CUL','CUN','CUU','CZM','DGO','DTW','EZE','FCO','GDL','GRU','GUA','HMO','JFK','LAP','LHR','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','ORD','PAZ','PMI','PTY','PVG','PVR','REX','ROC','SCL','SJD','SJO','SLC','SLP','TAM','TAP','TGZ','TIJ','TRC','VER','VGO','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "BWI",
  "label": "Baltimore    (BWI)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX','PVR','SJD')
  }
,  {
  "key": "BOS",
  "label": "Boston    (BOS)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ATL','CUN','GDL','MEX','SJD')
  }
,  {
  "key": "ORD",
  "label": "Chicago - O'Hare    (ORD)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','GUA','HMO','HUX','LAP','LHR','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PTY','PVR','QRO','REX','SAP','SCL','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','UIO','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CVG",
  "label": "Cincinnati    (CVG)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('GDL','MEX','PVR','SJD')
  }
,  {
  "key": "CMH",
  "label": "Columbus (CMH)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','MEX')
  }
,  {
  "key": "DFW",
  "label": "Dallas - Fort Worth  (DFW)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','GDL','GRU','GUA','HMO','LAP','LHR','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','PAZ','PVG','PVR','REX','SCL','SJD','SJO','SLP','SLW','TAM','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "DEN",
  "label": "Denver (DEN)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','REX','SAP','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH')
  }
,  {
  "key": "DTW",
  "label": "Detroit - Metro (DTW)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ATL','CUN','GDL','GUA','MEX','MTY','PVR','SJD','ZLO')
  }
,  {
  "key": "FAT",
  "label": "Fresno (FAT)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','GUA','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PTY','PVR','REX','SAP','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "BDL",
  "label": "Hartford Springfield (BDL)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX','PVR','SJD')
  }
,  {
  "key": "IAH",
  "label": "Houston - George Bush (IAH)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','GUA','HMO','HUX','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','PAZ','PTY','PVR','REX','SAL','SAP','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','UIO','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "IND",
  "label": "Indianapolis (IND)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "MCI",
  "label": "Kansas City (MCI)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX','SJD')
  }
,  {
  "key": "LRD",
  "label": "Laredo (LRD)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','CPE','CUU','DGO','GDL','MEX','MID','MLM','MTY','OAX','PVR','QRO','SLP','TAM','TAP','TLC','TRC','VER','ZCL')
  }
,  {
  "key": "LAS",
  "label": "Las Vegas (LAS)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','GUA','HMO','HUX','LAP','LHR','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PBC','PPE','PTY','PVR','QRO','REX','SAL','SAP','SCL','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TRC','UIO','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "LAX",
  "label": "Los Angeles (LAX)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','AQP','BJX','BOG','CEN','CIX','CJS','CME','CPE','CUL','CUN','CUU','CUZ','DGO','EZE','GDL','GRU','GUA','HMO','HUX','JUL','LAP','LHR','LIM','LMM','LTO','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PEM','PTY','PVR','QRO','REX','SAL','SAP','SCL','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TLC','TRC','UIO','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MEM",
  "label": "Memphis (MEM)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN')
  }
,  {
  "key": "MIA",
  "label": "Miami (MIA)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','GUA','HMO','HUX','LAP','LHR','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PTY','PVR','QRO','REX','SAP','SCL','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','UIO','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MKE",
  "label": "Milwaukee (MKE)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','MEX')
  }
,  {
  "key": "MSP",
  "label": "Minneapolis - St. Paul (MSP)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','MEX')
  }
,  {
  "key": "BNA",
  "label": "Nashville (BNA)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX','SJD')
  }
,  {
  "key": "JFK",
  "label": "New York - John F Kennedy (JFK)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','GUA','HMO','LAP','LHR','LIM','LMM','LTO','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PTY','PVR','QRO','REX','SAL','SAP','SCL','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TLC','TRC','UIO','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "LGA",
  "label": "New York – La Guardia (LGA)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX')
  }
,  {
  "key": "ORF",
  "label": "Norfolk (ORF)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "MSY",
  "label": "Nueva Orleans (MSY)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('AGU','BJX','CME','CPE','CUN','CUU','GDL','MEX','MID','MTY','MZT','OAX','PVR','SJD','TRC','VSA','ZIH')
  }
,  {
  "key": "ONT",
  "label": "Ontario (ONT)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','REX','SAP','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TLC','TRC','VER','VSA','ZCL','ZIH')
  }
,  {
  "key": "MCO",
  "label": "Orlando (MCO)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','GUA','HMO','LAP','LHR','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','REX','SAP','SCL','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH')
  }
,  {
  "key": "PHL",
  "label": "Philadelphia (PHL)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX')
  }
,  {
  "key": "PHX",
  "label": "Phoenix (PHX)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','QRO','REX','SAP','SCL','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH')
  }
,  {
  "key": "PDX",
  "label": "Portland (PDX)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "RDU",
  "label": "Raleigh (RDU)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX')
  }
,  {
  "key": "RIC",
  "label": "Richmond (RIC)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "ROC",
  "label": "Rochester (ROC)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ATL','MEX')
  }
,  {
  "key": "SMF",
  "label": "Sacramento (SMF)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','REX','SAP','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TLC','TRC','VER','VSA','ZCL','ZIH')
  }
,  {
  "key": "SLC",
  "label": "Salt Lake City (SLC)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ATL','CJS','CUL','CUN','CUU','GDL','HMO','LAP','MEX','MTY','PVR','SJD','TRC','ZLO')
  }
,  {
  "key": "SAT",
  "label": "San Antonio (SAT)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','GUA','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','PAZ','PVR','QRO','REX','SAP','SCL','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TLC','TRC','UIO','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "SAN",
  "label": "San Diego (SAN)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('PVR')
  }
,  {
  "key": "SFO",
  "label": "San Francisco (SFO)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','GUA','HMO','HUX','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PTY','PVR','QRO','REX','SAL','SAP','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "SJC",
  "label": "San Jose, CA (SJC)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('GDL','MEX','SJD')
  }
,  {
  "key": "SEA",
  "label": "Seattle (SEA)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "STL",
  "label": "St. Louis (STL)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX','PVR','SJD')
  }
,  {
  "key": "SYR",
  "label": "Syracusa (SYR)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "TPA",
  "label": "Tampa (TPA)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','MEX')
  }
,  {
  "key": "IAD",
  "label": "Washington – Dulles (IAD)",
  "country": "United States",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','CEN','CJS','CME','CPE','CUL','CUN','CUU','GDL','GUA','HMO','HUX','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MZT','NLD','OAX','PTY','PVR','REX','SAL','SAP','SJD','SJO','SLP','SLW','TAM','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH')
  }
];

(function(){
	var optionsHTML = '',
		date = new Date(),
		yesterday = new Date(); yesterday.setDate(date.getDate()-1),
		tomorrow = new Date(); tomorrow.setDate(date.getDate()+1),
		month = new Array("January","February","March","April","May","June","July","August","September","October","November","December"),
		label = '',
		value = '';

	optionsHTML += '<li data-val="'+yesterday.getFullYear()+''+("0" + (yesterday.getMonth() + 1)).slice(-2)+''+("0" + yesterday.getDate()).slice(-2)+'">'+yesterday.getDate()+' '+month[yesterday.getMonth()]+' '+yesterday.getFullYear()+'</li>';
	label = yesterday.getDate()+' '+month[yesterday.getMonth()]+' '+yesterday.getFullYear();
	value = yesterday.getFullYear()+''+("0" + (yesterday.getMonth() + 1)).slice(-2)+''+("0" + yesterday.getDate()).slice(-2);
	optionsHTML += '<li data-val="'+date.getFullYear()+''+("0" + (date.getMonth() + 1)).slice(-2)+''+("0" + date.getDate()).slice(-2)+'" selected="selected">'+date.getDate()+' '+month[date.getMonth()]+' '+date.getFullYear()+'</li>';
	optionsHTML += '<li data-val="'+tomorrow.getFullYear()+''+("0" + (tomorrow.getMonth() + 1)).slice(-2)+''+("0" + tomorrow.getDate()).slice(-2)+'">'+tomorrow.getDate()+' '+month[tomorrow.getMonth()]+' '+tomorrow.getFullYear()+'</li>';
	$('#flightDays').html(optionsHTML);
	$('#flightDays').prev().html(label);
	$('#flightDays').next().val(value);
})();
var modalLabels = [
	{	"modalTitle"	: "Select city",
		"modalRegion"	: "Region",
		"modalPartnerRT": "Aeromexico's Flights",
		"modalPartnerOW": "Partners' Flights"
	}
];

var errorForm = ["- Departure City cannot be blank\n",
	"- Destination City cannot be blank \n",
	"- Please select start date\n",
	"- Please select return date\n",
	"Select Departure City"
	];