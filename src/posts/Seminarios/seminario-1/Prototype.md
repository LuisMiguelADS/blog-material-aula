---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - Prototype
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Prototype
author: GabrielMreira, Redror
---

# Prototype

## Gabriel Moreira Bispo Santos (20221TADSSAJ0020)
[@GabrielMreira](https://github.com/GabrielMreira)

<!-- @include: ../../../includes/seminario-1-GabrielMreira/README.md -->


## Pedro Carlos de Gois Barros Santos (20221TADSSAJ0006)
[@Redror](https://github.com/Redror)

<!-- @include: ../../../includes/seminario-1-Redror/README.md -->

## Luís Miguel 

`Classe Formas`
```java
public abstract class Formas implements Prototype<Formas>{
    private int tamanho;
    public Formas(int tamanho) {
        this.tamanho = tamanho;
    }
    public int getTamanho() {
        return tamanho;
    }
    public void setTamanho(int tamanho) {
        this.tamanho = tamanho;
    }    
    public abstract Formas clone();    
}
```

`Classe Circulo que estende a classe abstrata Formas`
```java
public class Circulo extends Formas {
    public Circulo(int tamanho) {
        super(tamanho);
    }
    @Override
    public Formas clone() {
        return new Circulo(getTamanho());
    }
    @Override
    public String toString() {
        return "Circulo \nTamanho:" + getTamanho();
    }
}
```

`Classe Quadrado que estende a classe abstrata Formas`
```java
public class Quadrado extends Formas {
    public Quadrado(int tamanho) {
        super(tamanho);
    }
    @Override
    public Formas clone() {
        return new Quadrado(getTamanho());
    }
    @Override
    public String toString() {
        return "Quadrado \nTamanho:" + getTamanho();
    }    
}
```

`Classe Triangulo que estende a classe abstrata Formas`
```java
public class Triangulo extends Formas {
    public Triangulo(int tamanho) {
        super(tamanho);
    }
    @Override
    public Formas clone() {
        return new Triangulo(getTamanho());
    }
    @Override
    public String toString() {
        return "Triangulo \nTamanho:" + getTamanho();
    }  
}
```

`Interface Prototype`
```java
public interface Prototype<T> {
    T clone();
}
```

`Classe Colecao`
```java
import java.util.ArrayList;

public class Colecao  implements Prototype<Colecao>{
    private ArrayList<Formas> formas;    
    public Colecao() {
        this.formas = new ArrayList();
    }
    public void addFormas(Formas formas) {
        this.formas.add(formas);
    }
    public ArrayList<Formas> getFormas() {
        return formas;
    }
    @Override
    public Colecao clone() {
        Colecao clone = new Colecao();
        formas.forEach(
            forma -> {
                clone.addFormas(forma.clone());
            }
        );
        return clone;
    }
    public void showColecao() {
        for(Formas formas : this.formas) {
            System.out.println(formas);
        }
    }
}
```

`Código cliente`
```java
public class Main {
    public static void main(String[] args) {
        Circulo c1 = new Circulo(20);
        Circulo c2 = (Circulo) c1.clone();
        Triangulo t1 = new Triangulo(20);
        Triangulo t2 = (Triangulo) t1.clone();
        Quadrado q1 = new Quadrado(20);
        Quadrado q2 = (Quadrado) q1.clone();

        Colecao colecao = new Colecao();
        colecao.addFormas(c1);
        colecao.addFormas(t1);
        colecao.addFormas(q1);
        colecao.showColecao();
        Colecao colecao2 = colecao.clone();
    }
}
```
