class Ground{
    constructor(x, y, width, height) {
        var options = {
          isStatic: true
        };
    
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x=x; //adicionar a posição x e y, pois vao ser substituídas por algum valor depois;
		this.y=y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y); //colocar a translação da bola
        rectMode(CENTER);
        rect(0, 0, this.width, this.height); //ajustar o rect 
        pop();
    }
}