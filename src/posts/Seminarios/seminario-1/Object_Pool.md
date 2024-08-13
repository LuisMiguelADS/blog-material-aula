---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - 'Object Pool'
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Object Pool
author: JoaoAugustoMPdJ, SalvadorCerqueiraJr
---

# Object Pool

## João Augusto Moura Peixoto de Jesus (20211TADSSAJ0004)
[@JoaoAugustoMPdJ](https://github.com/JoaoAugustoMPdJ)

<!-- @include: ../../../includes/seminario-1-JoaoAugustoMPdJ/README.md -->


## Salvador Cerqueira Júnior (20212TADSSAJ0020)
[@SalvadorCerqueiraJr](https://github.com/SalvadorCerqueiraJr)

<!-- @include: ../../../includes/seminario-1-SalvadorCerqueiraJr/README.md -->

## Luís Miguel

`Classe abstrata Inimigo`
```java
public abstract class Inimigo {
    private String nome;
    private double pontosVida;
    
    abstract public void ataque();
    // Outros métodos ...
}
```

`Classe Arqueiro que estende Inimigo`
```java
public class Arqueiro extends Inimigo {
    
    public Arqueiro(){
        this.nome = "Arqueiro";
        this.pontosVida = "60";
    } 

    @Override
    public void ataque(){
        // Lógica do método ataque, por exemplo, atirar flecha
    }
    // Outros métodos ...
}
```

`Classe Mago que estende Inimigo`
```java
public class Mago extends Inimigo {
    
    public Mago(){
        this.nome = "Mago";
        this.pontosVida = "50";
    } 

    @Override
    public void ataque(){
        // Lógica do método ataque, por exemplo, lançar magia
    }
    // Outros métodos ...
}
```

`Classe Guerreiro que estende Inimigo`
```java
public class Guerreiro extends Inimigo {
    
    public Guerreiro(){
        this.nome = "Guerreiro";
        this.pontosVida = "200";
    } 

    @Override
    public void ataque(){
        // Lógica do método ataque, por exemplo, corte com espada
    }
    // Outros métodos ...
}
```

`Classe InimigoPool`
```java
public class InimigoPool {
    private List<Inimigo> inimigosDisponiveis;
    
    public InimigoPool(){
        this.inimigosDisponiveis = new ArrayList<>();
        this.inimigosDisponiveis.add(new Atirador());
        this.inimigosDisponiveis.add(new Mago());
        this.inimigosDisponiveis.add(new Guerreiro());
    } 

    public Inimigo usarInimigo(String tipo){
        if (inimigosDisponiveis.isEmpty()) {
            if (tipo == "Arqueiro") {
                return new Atirador();
            } else if (tipo == "Mago") {
                return new Mago();
            } else if (tipo == "Guerreiro") {
                return new Guerreiro();
            } else {
                System.out.println("Não existe este tipo de inimigo");
            }
        } else {
            for (Inimigo inimigo : inimigosDisponiveis) {
                if (inimigo.name.equals("Arqueiro")) {
                    inimigosDisponiveis.remove(inimigo);
                    return inimigo;
                } else if (inimigo.name.equals("Mago")) {
                    inimigosDisponiveis.remove(inimigo);
                    return inimigo;
                } else if (inimigo.name.equals("Guerreiro")) {
                    inimigosDisponiveis.remove(inimigo);
                    return inimigo;
                } else {
                    System.out.println("Não existe este tipo de inimigo");
                    return null;
                }
            }
        }
    }

    public void retornarInimigoPool(Inimigo inimigo){
        inimigosDisponiveis.add(inimigo);
    }

    // Outros métodos ...
}
```

`Código cliente`
```java
public class Main {
    public static void main(String[] args) {
        InimigoPool inimigoPool = new InimigoPool();

        Inimigo arqueiro = inimigoPool.usarInimigo("Arqueiro");
        Inimigo mago = inimigoPool.usarInimigo("Mago");
        Inimigo guerreiro = inimigoPool.usarInimigo("Guerreiro");

        arqueiro.ataque();
        mago.ataque();
        guerreiro.ataque();

        inimigoPool.retornarInimigoPool(arqueiro);
        inimigoPool.retornarInimigoPool(mago);
        inimigoPool.retornarInimigoPool(guerreiro);
    }
}
```
