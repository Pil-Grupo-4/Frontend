import { Component,EventEmitter,HostListener,Output } from '@angular/core';
import jsonStock from "./jsonStocks/23-08-23.json";
import {DashboardService} from '../../services/dashboard.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent{
    
    listCompras : Compra[] = []
    totalFunds : number = 2000;
    availableFunds : number = 2000;
    dailyGains : number = 0;
    isMobile : boolean = false;
    private dashbServ : DashboardService;
    
    //Traerme el saldo del usuario y guardarlo en availableFunds. El valor 2000 es provisional.

    constructor(){
        
        this.dashbServ.GetComprasByID(2).subscribe(//poner id del cliente
            (response : any) => {
                
                this.listCompras = response;
                console.log('Datos de compras recibidos:', this.listCompras);
              },
                (error) => {
                console.log(error)
                console.log("No se encontraron compras de este usuario.")
            }
        )

        this.checkScreenSize();
        
        this.listCompras.forEach((compra) => {
            //iterar para sacar el total de fondos y la daily gain (es 0)
        });


        // for (let i = 2; i < 8; i++) {
        //     let stock : StockItem = this.stocksfromJSON[i];
        //     let stockDataItem = new StockData();
        //     if (stock.puntas !== null && stock.ultimoCierre !== null) {
        //         stockDataItem.amount = stock.puntas.cantidadCompra;
        //         stockDataItem.company = stock.descripcion;
        //         stockDataItem.currentPrice = stock.ultimoCierre;
        //         stockDataItem.symbol = stock.simbolo;
        //         stockDataItem.price = stock.puntas.precioCompra;
        //         stockDataItem.total = stock.puntas.cantidadCompra * stock.ultimoCierre;
        //         stockDataItem.gains = calculatePercentageGain(stock.puntas.precioCompra, stock.ultimoCierre);
        //         this.totalFunds = parseFloat((this.totalFunds + stockDataItem.total).toFixed(2));
        //         this.dailyGains = parseFloat((this.dailyGains +(stock.ultimoCierre - stock.puntas.precioCompra)).toFixed(2));
        //         this.stocksData.push(stockDataItem);
        //     }
        // }
    }
    @HostListener("window:resize", ["$event"])
    onResize(event: any) {
        // Update the screen size whenever the window is resized
        this.checkScreenSize();
    }

    private checkScreenSize() {
        // Check the viewport width to determine if it's a mobile screen
        this.isMobile = window.innerWidth < 768;
    }
}




function calculatePercentageGain(originalValue: number, currentValue: number): number {
    const gain = ((currentValue - originalValue) / originalValue) * 100;
    return Math.round(gain * 100) / 100; // Round to 2 decimal places
}

export class StockItem {
    simbolo:string | null;
    puntas:Punta | null = new Punta();
    ultimoPrecio: number | null;
    variacionPorcentual:number | null;
    apertura: number | null;
    maximo: number | null;
    minimo: number | null;
    ultimoCierre: number | null;
    volumen: number | null;
    cantidadOperaciones: number | null;
    fecha: string | null;
    tipoOpcion: string | null;
    precioEjercicio: string | null;
    fechaVencimiento: string | null;
    mercado: string | null;
    moneda: string | null;
    descripcion: string | null;
    plazo: string | null;
    laminaMinima: number | null;
    lote: number | null;
    //total:number | null;
    //gains:number | null;
}

export class StockData {
    symbol : string | null;
    company : string | null;
    amount : number;
    price : number;
    currentPrice: number | null;
    gains : number;
    total : number;
}

export class Punta {
    cantidadCompra: number;
    precioCompra: number;
    precioVenta: number;
    cantidadVenta: number;
}

export class Compra {
    idCompra : number;
    simbolo : string;
    comision : number;
    cantidad : number;
    precio : number;
    fecha : Date;
    idclient : number;
}