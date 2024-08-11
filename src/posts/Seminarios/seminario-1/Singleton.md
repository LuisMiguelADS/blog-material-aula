---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - Singleton
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Singleton
author: GuiSamp, RiansFonseca
---

# Singleton
## Guilherme Sampaio Oliveira (20221TADSSAJ0011)
[@GuiSamp](https://github.com/GuiSamp)

<!-- @include: ../../../includes/seminario-1-GuiSamp/README.md -->


## Rian Silva da Fonseca (20221TADSSAJ0002)
[@RiansFonseca](https://github.com/RiansFonseca)

<!-- @include: ../../../includes/seminario-1-RiansFonseca/README-SINGLETON.md -->

## Luís Miguel

`Classe Tabuleiro`
```java
public class Tabuleiro {
    private static Tabuleiro instance;

    private Double area;

    private Tabuleiro(Double area) {
        this.area = area;
    }

    public static Tabuleiro getInstance(Double area) {
        if (instance == null) {
            instance = new Tabuleiro(area);
        }
        return instance;
    }

    public void mostrarTabuleiro() {
        // Lógica para o método
    }
}
```

`Código cliente`
```java
public class Main {
    public static void main(String[] args) {
        Tabuleiro tabuleiro1 = Tabuleiro.getInstance(100);
        tabuleiro.mostrarTabuleiro();
        Tabuleiro tabuleiro2 = Tabuleiro.getInstance(200);
        System.out.println("São as mesmas instâncias? " + (tabuleiro1 == tabuleiro2));
    }
}
```
