export class Utils {
    
    public static hitTestByPoint(x, y, sizeX, sizeY, pointX, pointY):boolean {
        let result:boolean = x < pointX && (x + sizeX) > pointX && 
            y < pointY && (y + sizeY) > pointY;
    
        return result;
    }
    
    public static getMousePos(canvas, evt): any {
        var rect = canvas.getBoundingClientRect();
        
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    
    public static deepClone(item:any):any {
        return JSON.parse(JSON.stringify(item));
    }
}
