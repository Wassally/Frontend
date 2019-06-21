import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })

  export class govCity {
    
    governorates =[
        "Cairo",
        "Giza",
        "Alexandria",
        "Dakahlia",
        "Red Sea",
        "Beheira",
        "Fayoum",
        "Gharbiya",
        "Ismailia",
        "Monofia",
        "Minya",
        "Qaliubiya",
        "New Valley",
        "Suez",
        "Aswan",
        "Assiut",
       " Beni Suef",
        "Port Said",
       " Damietta",
        "Sharkia",
       " South Sinai",
       " Kafr Al sheikh",
       " Matrouh",
        "Luxor",
      "  Qena",
       " North Sinai",
       " Sohag  ",
    ]
    
    cities=[
    [
        "cairo"
    ]
     , 
    ["Giza" ,
    "Sixth of October",
    "Cheikh Zayed",
    "Hawamdiyah",
    "Al Badrasheen",
    "Saf",
    "Atfih",
    "Al Ayat",
    "Al-Bawaiti",
    "ManshiyetAl Qanater",
    "Oaseem",
    "Kerdasa",
    "Abu Nomros",
    "Kafr Ghati",
    "Manshiyet Al Bakari" 
]  
    
    , [
        "Alexandria" , 
    "Burj Al Arab" , 
    "New Burj Al Arab" , 
    ]
    
  , [
    
    "Mansoura",
    "Talkha",
    "Mitt Ghamr",
    "Dekernes",
    "Aga",
    "Menia El Nasr",
    "Sinbillawin",
    "El Kurdi",
    "Bani Ubaid",
    "Al Manzala",
    "tami alamdid",
    "aljamalia",
    "Sherbin",
    "Mataria",
    "Belqas",
    "Meet Salsil",
    "Gamasa",
    "Mahalat Damana",
    "Nabroh"
    ]
 ,[
    "Hurghada",
    "Ras Ghareb",
    "Safaga",
    "El Qusiar",
    "Marsa Alam",
    "Shalatin",
    "Halaib"
    ]
    
    , [
    "Damanhour",
    "Kafr El Dawar",
    "Rashid",
    "Edco",
    "Abu al-Matamir",
    "Abu Homs",
    "Delengat",
    "Mahmoudiyah",
    "Rahmaniyah",
    "Itai Baroud",
    "Housh Eissa",
    "Shubrakhit",
    "Kom Hamada",
    "Badr",
    "Wadi Natrun",
    "New Nubaria "
    ]
    
    , [
    "Fayoum",
    "Fayoum El Gedida",
    "Tamiya",
    "Snores",
    "Etsa",
    "Epschway",
    "Yusuf El Sediaq"
    ] 
    
    ,[
    "Tanta",
    "Al Mahalla Al Kobra",
    "Kafr El Zayat",
    "Zefta",
    "El Santa",
    "Qutour",
    "Basion",
    "Samannoud"
    ]
    
  ,[
    "Ismailia",
    "Fayed",
    "Qantara Sharq",
    "Qantara Gharb",
    "El Tal El Kabier",
    "Abu Sawir",
    "Kasasien El Gedida" 
    ]
    
    ,[
    "Shbeen El Koom",
    "Sadat City",
    "Menouf",
    "Sars El-Layan",
    "Ashmon",
    "Al Bagor",
    "Quesna",
    "Berkat El Saba",
    "Tala",
    "Al Shohada"
    ]
   ,[
    "Minya",
    "Minya El Gedida",
    "El Adwa",
    "Magagha",
    "Bani Mazar",
    "Mattay",
    "Samalut",
    "Madinat El Fekria",
    "Meloy",
    "Deir Mawas"
    ]
    ,[
    "Banha",
    "Qalyub",
    "Shubra Al Khaimah",
    "Al Qanater Charity",
    "Khanka",
    "Kafr Shukr",
    "Tukh",
    "Qaha",
    "Obour",
    "Khosous",
    "Shibin Al Qanater"
    ]
    ,[
    "El Kharga",
    "Paris",
    "Mout",
    "Farafra",
    "Balat"
    ]
    
    ,[
    "Suez"
    ]
   ,[
    "Aswan",
    "Aswan El Gedida",
    "Drau",
    "Kom Ombo",
    "Nasr Al Nuba",
    "Kalabsha",
    "Edfu",
    "Al-Radisiyah",
    "Al Basilia",
    "Al Sibaeia",
    "Abo Simbl Al Siyahia",
    "Aswan",
    "Aswan El Gedida",
    "Drau",
    "Kom Ombo",
    "Nasr Al Nuba",
    "Kalabsha",
    "Edfu",
    "Al-Radisiyah",
    "Al Basilia",
    "Al Sibaeia",
    "Abo Simbl Al Siyahia"
    ]
   ,[
    "Assiut",
    "Assiut El Gedida",
    "Dayrout",
    "Manfalut",
    "Qusiya",
    "Abnoub",
    "Abu Tig",
    "El Ghanaim",
    "Sahel Selim",
    "El Badari",
    "Sidfa"
    ]
    ,[
    "Bani Sweif",
    "Beni Suef El Gedida",
    "Al Wasta",
    "Naser",
    "Ehnasia",
    "beba",
    "Fashn",
    "Somasta"
    ]
    ,[
    "PorSaid",
    "PorFouad"
    ]
   ,[
    "Damietta",
    "New Damietta",
    "Ras El Bar",
    "Faraskour",
    "Zarqa",
    "alsaru",
    "alruwda",
    "Kafr El-Batikh",
    "Azbet Al Burg",
    "Meet Abou Ghalib",
    "Kafr Saad"
    ]
  ,[
    "Zagazig",
    "Al Ashr Men Ramadan",
    "Minya Al Qamh",
    "Belbeis",
    "Mashtoul El Souq",
    "Qenaiat",
    "Abu Hammad",
    "El Qurain",
    "Hehia",
    "Abu Kabir",
    "Faccus",
    "El Salihia El Gedida",
    "Al Ibrahimiyah",
    "Deirb Negm",
    "Kafr Saqr",
    "Awlad Saqr",
    "Husseiniya",
    "san alhajar alqablia",
    "Manshayat Abu Omar"
    ]
    ,[
    "Al Toor",
    "Sharm El-Shaikh",
    "Dahab",
    "Nuweiba",
    "Taba",
    "Saint Catherine",
    "Abu Redis",
    "Abu Zenaima",
    "Ras Sidr"
    ]
   ,[
    "Kafr El Sheikh",
    "Desouq",
    "Fooh",
    "Metobas",
    "Burg Al Burullus",
    "Baltim",
    "Masief Baltim",
    "Hamol",
    "Bella",
    "Riyadh",
    "Sidi Salm",
    "Qellen",
    "Sidi Ghazi"
    ]
 ,[
    "Marsa Matrouh",
    "El Hamam",
    "Alamein",
    "Dabaa",
    "Al-Nagila",
    "Sidi Brani",
    "Salloum",
    "Siwa"
    ]
    ,[
    "Luxor",
    "New Luxor",
    "Esna",
    "New Tiba",
    "Al ziynia",
    "Al Bayadieh",
    "Al Qarna",
    "Armant",
    "Al Tud",
    "Luxor",
    "New Luxor",
    "Esna",
    "New Tiba",
    "Al ziynia",
    "Al Bayadieh",
    "Al Qarna",
    "Armant",
    "Al Tud"
    ]
  ,[
    "Qena",
    "New Qena",
    "Abu Tesht",
    "Nag Hammadi",
    "Deshna",
    "Alwaqf",
    "Qaft",
    "Naqada",
    "Farshout",
    "Quos",
    "Qena",
    "New Qena",
    "Abu Tesht",
    "Nag Hammadi",
    "Deshna",
    "Alwaqf",
    "Qaft",
    "Naqada",
    "Farshout",
    "Quos"
    ]
   ,[
    "Arish",
    "Sheikh Zowaid",
    "Nakhl",
    "Rafah",
    "Bir al-Abed",
    "Al Hasana"
    ]
    ,[
    "Sohag",
    "Sohag El Gedida",
    "Akhmeem",
    "Akhmim El Gedida",
    "Albalina",
    "El Maragha",
    "almunshaa",
    "Dar AISalaam",
    "Gerga",
    "Jahina Al Gharbia",
    "Saqilatuh",
    "Tama",
    "Tahta",
    "Dar AISalaam",
    "Gerga",
    "Jahina Al Gharbia",
    "Saqilatuh",
    "Tama",
    "Tahta"
    ]
]
    
    
    
    
  }

  /*
  <div class="selectInput">
  <label    class=" select-lable ">   Governorate </label>
  <select class="select select__governate" name="from_governate"  (change)="onChange($event)" ngModel >
    <option  *ngFor = "let gov of governate "> {{gov}}  </option>
      
   </select>
  </div>
  <div class="selectInput">
   <label    class=" select-lable ">   City </label>
  <select class="   select select__city" name="from_city" ngModel >
    <option *ngFor = "let city of cities "> {{city}} </option>
    
   </select>
  </div>
-->*/


/*

component code 

governate =this.GovCity.governorates ;
cities = this.GovCity.cities[0];
citiesTo = this.GovCity.cities[0];
  onChange(e : Event){
    const index : number = event.target["selectedIndex"] ;
    this.cities = this.GovCity.cities[index];
  }
  onChangeTo(e : Event){
    const i : number = event.target["selectedIndex"] ;
    this.citiesTo = this.GovCity.cities[i];
  }

*/