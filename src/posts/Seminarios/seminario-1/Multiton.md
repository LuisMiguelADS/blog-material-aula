---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - Multiton
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Multiton
author: GuiSamp, RiansFonseca
---

# Multiton

## Guilherme Sampaio Oliveira (20221TADSSAJ0011)
[@GuiSamp](https://github.com/GuiSamp)

<!-- @include: ../../../includes/seminario-1-GuiSamp/Multiton.md -->



## Rian Silva da Fonseca (20221TADSSAJ0002)
[@RiansFonseca](https://github.com/RiansFonseca)

<!-- @include: ../../../includes/seminario-1-RiansFonseca/README-MULTITON.md -->


## Leandro

```java

public enum Configuracao {
    localDb("jdbc:mysql://localhost:3306/meuBanco",
                "admin",
                "senha123"),
    remotoDb("jdbc:mysql://remotehost:3306/outroBanco",
                "root",
                "rootpassword");

    private final String urlBancoDeDados;
    private final String usuario;
    private final String senha;

    private Configuracao(String urlBancoDeDados, String usuario,String senha){
        this.urlBancoDeDados = urlBancoDeDados;
        this.usuario = usuario;
        this.senha = senha;
    }

    public String getSenha() {
        return senha;
    }

    public String getUrlBancoDeDados() {
        return urlBancoDeDados;
    }

    public String getUsuario() {
        return usuario;
    }
    public static void main(String[] args) {
        Configuracao.localDb.getSenha();
    }
    
}
```

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

`Classe InimigoMultiton`
```java
public class InimigoMultiton {
    private static final Map<String, Inimigo> instancias = new HashMap<>();

    public static final String ARQUEIRO = "Arqueiro";
    public static final String MAGO = "Mago";
    public static final String GUERREIRO = "Guerreiro";

    private EnemyMultiton() {}

    public static Inimigo getInstancia(String tipo) {
        if (!instancias.containsKey(tipo)) {
            switch (tipo) {
                case ARQUEIRO:
                    instancias.put(tipo, new Arqueiro());
                    break;
                case MAGO:
                    instancias.put(tipo, new Mago());
                    break;
                case GUERREIRO:
                    instancias.put(tipo, new Guerreiro());
                    break;
            }
        }
        return instancias.get(tipo);
    }
}
```

`Código usuário`
```java
public class Main {
    public static void main(String[] args) {
        Inimigo arqueiro = InimigoMultiton.getInstancia(InimigoMultiton.ARQUEIRO);
        Inimigo mago = InimigoMultiton.getInstancia(InimigoMultiton.MAGO);
        Inimigo guerreiro = InimigoMultiton.getInstancia(InimigoMultiton.GUERREIRO);
    }
}
```
