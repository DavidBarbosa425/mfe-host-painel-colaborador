import { Injectable } from '@angular/core';

import moment from 'moment';
import { enum_grid_options_default } from '../base/models/baseModel';

@Injectable({
  providedIn: 'root'
})
export class Utils {

  constructor() { }

  static newInstance(obj) {
    if (!obj)
      return null;

    return JSON.parse(JSON.stringify(obj));
  }

  static dateToString(date : Date) : string{
    return date.toLocaleDateString('pt-BR',{ year: 'numeric', month: 'long', day: 'numeric' })
  }

  static numberToMoneyBR(value : number) : string{
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  static isDate(value) : boolean{
    if(value instanceof Date)
        return true

    if (Object.prototype.toString.call(value) === "[object Date]") {
        if (isNaN(value)) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }

}

  static getDataAtual(): Date{

    const dataAtual = new Date();

    dataAtual.setHours(0, 0, 0, 0);

    return dataAtual
  }

  static formataDataDateToString(date: Date): string{

    const dataAtual = new Date(date);

    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth() + 1; // Lembrando que os meses são indexados de 0 a 11
    const dia = dataAtual.getDate();

    const dataFormatada = `${ano}/${mes}/${dia}`;
    
    return dataFormatada
  }

  static formataDataToHours(date: Date): string{

    const dataAtual = new Date(date)

    const hours = dataAtual.getHours().toString()
    const minutes = dataAtual.getMinutes().toString()

    const dataFormatada = `${hours.length < 2 ? '0' + hours : hours}:${minutes.length < 2 ? '0' + minutes : minutes}`
    
    return dataFormatada
  }

  static formataDataSubtraindo7Dias(date: Date): Date{

    const data = new Date(date);

    data.setHours(0, 0, 0, 0);

    data.setDate(data.getDate() - 7)
    
    return data
  }

  static formataDataStringToDate(date: Date): Date{

    const data = new Date(date);

    data.setHours(0, 0, 0, 0);
    
    return data
  }

  static stringToDate(text : string) : Date{
    try{
        let textSplit : string[] = text.split("-")
        if(textSplit.length == 3){
            let ano : number = parseInt(textSplit[0])
            let mes : number = parseInt(textSplit[1])
            let dia : number = parseInt(textSplit[2])

            return new Date(ano,mes-1,dia)
        }

        return null
    }catch(error){
        console.log("stringToDate ERROR",error)
        throw error
    }
}

  static compareTexts(str1: String, str2: String): boolean {
    if (!str1 || !str2)
      return false

    str1 = str1.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    str2 = str2.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    return (str1.toLowerCase().trim() == str2.toLowerCase().trim())
  }

  static isNull(value): boolean {
    return (value == null ||
      value == undefined ||
      value.toString().trim() == "" ||
      (Array.isArray(value) && value.length == 0)
    )
  }

  static isNotNull(value): boolean {
    return (
      value != null
      && value != undefined
      && ((value.toString().trim() != "" && value.toString() != "0001-01-01T00:00:00") || (Array.isArray(value) && value.length > 0))
      && ((Number.isInteger(value) && parseInt(value.toString()) >= 0) || !Number.isInteger(value))
    )
  }

  static exists(value): boolean {
    return (value != undefined)
  }

  static isEmpty(value): boolean {
    if (JSON.stringify(value) == "{}")
      return true

    return false
  }

  static isNotEmpty(value): boolean {
    if (Utils.isNotNull(value)) {
      if (JSON.stringify(value) !== "{}")
        return true
    }

    return false
  }

  static instanceOfADate(){

  }

  static stringIsDate(value) : boolean{
    try{
      if(Array.isArray(value)){
        return false
      }

      if(!value)
        return false

      let splitDataHora = value.toString().split("T")
      if(splitDataHora.length > 1){

        let dataSplit = splitDataHora[0].split("-")
        if(dataSplit.length == 3){
          let ano = dataSplit[0]
          let mes = dataSplit[1]
          let dia = dataSplit[2]

          if(ano.length != 4 ||  mes.length != 2 || dia.length != 2)
            return false
        }else{
          return false
        }

        let horaSplit = splitDataHora[1].split(":")
        if(horaSplit.length == 3){
          let hora = horaSplit[0]
          let minuto = horaSplit[1]
          let segundo = horaSplit[2]

          if(hora.length != 2 ||  minuto.length != 2 || segundo.length != 2)
            return false
        }else{
          return false
        }

        return true
      }

      let splitData = value.toString().split("-")
      if(splitData.length == 3){

        let ano = splitData[0]
        let mes = splitData[1]
        let dia = splitData[2]

        if(ano.length != 4 ||  mes.length != 2 || dia.length != 2)
          return false

        let testDate : Date = new Date(ano,mes,dia)
        if(testDate.getFullYear() > 2000)
          return true
      }

      return false

    }catch(error){
      console.log("Utils stringIsDate",error)
      return false
    }

  }

  static existsOnString(stringVerification: string, searchKeys: string | string[]): boolean {
    let exists: boolean = false
    let searchKeysFinal: string[] = []

    if (Array.isArray(searchKeys))
      searchKeysFinal = searchKeys
    else
      searchKeysFinal.push(searchKeys)

    searchKeysFinal.forEach(searchKey => {
      if (stringVerification.indexOf(searchKey) > -1)
        exists = true
    })
    return exists
  }

  static notExistsOnString(stringVerification: string, searchKeys: string | string[]): boolean {
    return !Utils.existsOnString(stringVerification, searchKeys)
  }

  static getListFromEnum(enumObj: any): any[] {
    return Object.keys(enumObj).map(keyMap => {
      let objList = {}

      Object.keys(enumObj[keyMap]).forEach(keyItem => {
        objList[keyItem] = enumObj[keyMap][keyItem]
      })

      return objList
    })

  }

  static getPadraoLength(lista: any[], parametro: string) {
    let itensList: any[] = lista.map(itemMap => { return itemMap[parametro].toString().length })
    return itensList.sort((a, b) => b - a)[0]
  }

  static leftPad(value, totalWidth, paddingChar: string = "0") {
    try {
      var length = totalWidth - value.toString().length + 1;
      return Array(length).join(paddingChar) + value;
    } catch (error) {
      return value
    }
  }

  static stringToNumber(txt: string): number {
    try {
      if (Utils.isNotNull(txt)) {
        var numsStr = txt.toString().replace(/[^0-9]/g, '');

        if (Utils.isNull(numsStr))
          return null

        return parseInt(numsStr);
      }

      return null
    } catch (error) {
      return null
    }

  }

  static stringToBoolean(txt: string): boolean {
    try {

      if (Utils.isNotNull(txt)) {
        var bStr = txt.toString()

        if (Utils.isNull(bStr))
          return null

        return (/true/i).test(bStr);
      }

      return null
    } catch (error) {
      return null
    }

  }

  static toFormatHoras(txt: string): string {
    var horasNumber: number = Utils.stringToNumber(txt)
    var horasString: string = horasNumber.toString();
    let horasLeftPad: string = Utils.leftPad(horasString, 5)
    let horas: string = horasLeftPad.substring(0, 3)
    let minutos: string = horasLeftPad.substring(3, 5)
    return `${horas}:${minutos}`
  }


  static get_array_order_width(array: any[]): any[] {

    if (array[0].width >= 0)
      return array.sort((a, b) => a.width - b.width)

    return array
  }


  static get_prop_bool(itens: any[], screen_width: number, prop: string, val_default: boolean) {

    let value: boolean = val_default

    for (let index = 0; index < itens.length; index++) {

      const item = itens[index]

      if (item.width == enum_grid_options_default.fix) {
        value = item[prop]
        continue
      }

      if (screen_width <= item.width) {
        value = item[prop]
        break
      }
    }

    return value
  }

  static read_text_file(file: File): Promise<any> {

    return new Promise(async (resolve, reject) => {

      let fileReader = new FileReader()
      fileReader.onload = () => {

        let data = fileReader.result

        var array_return: string[] = []
        var eachLine = data?.toString().split('\n');

        eachLine?.forEach((linha: string) => {

          if (linha.trim() != "")
            array_return.push(linha)
        })

        resolve(array_return)
      }
      fileReader.readAsText(file);
    })
  }

  static read_csv_file(file: File): Promise<any> {

    return new Promise(async (resolve, reject) => {

      let fileReader = new FileReader()
      fileReader.onload = () => {

        let data = fileReader.result

        var array_return: string[][] = []
        var eachLine = data?.toString().split('\n');

        eachLine?.forEach((linha: string) => {

          let arr = []
          let str = ""

          if (linha.trim() != "") {

            for (var i = 0; i < linha.length; i++) {
              if (linha[i] == ';') {
                arr.push(str)
                str = ""
              } else {
                str += linha[i]
              }
            }
            arr.push(str)
            array_return.push(arr)
          }
        })

        resolve(array_return)
      }

      fileReader.readAsText(file);
    })
  }

  static format_horas(value: string): string {

    let valor = "00:00"

    if (value != "") {

      value = value.replace(":", "")

      if (value.length == 1)
        valor = `00:0${value}`
      else if (value.length == 2)
        valor = `00:${value}`
      else if (value.length == 3) {
        valor = `0${value.substring(0, 1)}:${value.substring(1)}`
      }
      else if (value.length == 4) {
        valor = `${value.substring(0, 2)}:${value.substring(2)}`
      }
      else if (value.length == 5) {
        valor = `${value.substring(0, 3)}:${value.substring(3)}`
      }
      else if (value.length == 6) {
        valor = `${value.substring(0, 3)}:${value.substring(4)}`
      }
    }

    return valor
  }

  static get_data(_data: string): Date {

    let data = ""

    if (_data != "") {

      let dia = _data.substring(6, 8)
      let mes = _data.substring(4, 6)
      let ano = _data.substring(0, 4)

      data = `${dia}/${mes}/${ano}`
    }

    return new Date(data)
  }

  static get_data_momento(_data: Date): any {

    let data: any = null

    if (_data != null) {
      data = moment(new Date(_data), 'YYYY-MM-DD');
    }

    return data
  }

  static get_data_format(_data: string): string {

    let data = ""

    if (_data != "") {

      let dia = _data.substring(6, 8)
      let mes = _data.substring(4, 6)
      let ano = _data.substring(0, 4)

      data = `${mes}/${dia}/${ano}`
    }

    return data
  }

  static diff_days(data: Date, data_compare: Date = null): number {

    let _data = new Date(data);
    let currentDate = new Date();

    if (data_compare != null)
      currentDate = new Date(data_compare)

    let days = Math.floor((currentDate.getTime() - _data.getTime()) / 1000 / 60 / 60 / 24);
    return days;
  }

  static removeDuplicateItens(list : any[],paramName : string = null){
    let newList : any[] = []
    list.forEach(itemList =>{
      let index : number = newList.findIndex(findItem => {
        if(paramName){
          if(findItem[paramName] == itemList[paramName])
            return true
        }else{
          if(findItem == itemList)
            return true
        }

        return false
      })

      if(index == -1){
        newList.push(itemList)
      }
    })

    return newList
  }
}
