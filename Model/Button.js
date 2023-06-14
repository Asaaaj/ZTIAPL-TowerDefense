class Button{
    constructor(text, textColor, fontSize, textPosX, textPosY, color,  x, y, width, height, secText, secTextPosX, secTextPosY){
        this.text = {
            string : text,
            textColor : textColor,
            x : textPosX,
            y : textPosY
        };
        this.color = color;
        this.fontSize = fontSize;
        this.position ={
            x : x,
            y : y
        }
        this.width = width;
        this.height = height;
        this.secText = {
            string: secText,
            x: secTextPosX,
            y: secTextPosY
        }
    }

    create(){
        context.fillStyle = this.color;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        context.font = "bold " + this.fontSize +" Times New Roman";
        context.fillStyle = this.text.textColor;
        context.fillText(this.text.string, this.text.x, this.text.y);
        if(this.secText){
            context.fillText(this.secText.string, this.secText.x, this.secText.y);
        }
    }
}