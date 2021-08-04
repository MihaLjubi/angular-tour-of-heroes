import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parse } from 'node-html-parser';

const root = parse('<table class=\"info_table\" width=\"800\"><tbody><tr><td class=\"info_td\" >Lesna zaloga (LZ) gozda (v m<sup>3</sup>/ha)<div class=\"hint\"><b>Lesna zaloga</b>(LZ) gozda nam pove, koliko lesne mase (v m<sup>3</sup>) je na enem hektaru gozda. Je eden glavnih indikatorjev stanja gozda. Predstavlja prostornino vseh živih dreves (s skorjo) s premerom, ki je večji od ali enak 10 cm, merjeno na prsni višini (1,3 m). </div></td><td class=\"info_td\" >Iglavci</td><td class=\"info_td\"  style=\"background-color: #e6e6e6;\"><span style=\"color: #800000;\">148</span></td><td class=\"info_td\" >Listavci</td><td class=\"info_td\"  style=\"background-color: #e6e6e6;\"><span style=\"color: #800000;\">128</span></td><td class=\"info_td\" >Skupaj</td><td class=\"info_td\"  style=\"background-color: #e6e6e6;\"><span style=\"color: #800000;\">276</span></td></tr><tr><td class=\"info_td\" >Letni prirastek (m<sup>3</sup>/ha/leto)<div class=\"hint\"><b>Letni prirastek</b>nam pove, koliko lesne mase (v m<sup>3</sup>) letno priraste v gozdnem sestoju (na hektar na leto). Letni prirastek je povprečna letna prostornina prirastka skozi določeno časovno obdobje. </div></td><td class=\"info_td\" >Iglavci</td><td class=\"info_td\"  style=\"background-color: #e6e6e6;\"><span style=\"color: #800000;\">3,71</span></td><td class=\"info_td\" >Listavci</td><td class=\"info_td\"  style=\"background-color: #e6e6e6;\"><span style=\"color: #800000;\">2,88</span></td><td class=\"info_td\" >Skupaj</td><td class=\"info_td\"  style=\"background-color: #e6e6e6;\"><span style=\"color: #800000;\">6,59</span></td></tr></tbody></table>');

interface vrstaDreves {
  listavci: string;
  iglavci: string;
  skupaj: string;
}

@Injectable({
  providedIn: 'root'
})
export class ZgsService {
  lesnaZaloga: vrstaDreves = {listavci: "", iglavci: "", skupaj: ""};
  lesniPrirastek: vrstaDreves = {listavci: "", iglavci: "", skupaj: ""};

  constructor(private http: HttpClient) {}

  getData() {
    let lesnaZaloga = root.querySelector('.info_table').childNodes[0].childNodes[0];
    let lesniPrirastek = root.querySelector('.info_table').childNodes[0].childNodes[1];
    // lesnaZaloga.childNodes.forEach( child => {
    //   if(child.childNodes.length > 1) {
    //     return;
    //   }
    //   console.log(child.childNodes[0].rawText);
    // });
    this.lesnaZaloga.listavci = lesnaZaloga.childNodes[2].childNodes[0].rawText;
    this.lesnaZaloga.iglavci = lesnaZaloga.childNodes[4].childNodes[0].rawText;
    this.lesnaZaloga.skupaj = lesnaZaloga.childNodes[6].childNodes[0].rawText;
    console.log(this.lesnaZaloga);
  }
}
