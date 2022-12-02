# Nuit de l'info 2022

<!-- G -->
## About
--
Ce serious game a été produit en une nuit par un groupe de sept étudiants. Il a pour objectif de sensibiliser de manière ludique les adolescents et les jeunes adultes aux enjeux de la santé sexuelle : IST, acceptation de soi, contraception, ...

This serious game hase been produced in one night by a team of seven students. It aims to raise awareness in a fun way on various topics around sexuality : Sexual Transmitted Infections, self-acceptance, contraception, ...

#### Prerequisites

You must have installed `docker` and `docker-compose` in order to run correctly the container.

Vous devez d'abord installer `docker` et `docker-compose` pour pouvoir lancer correctement le conteneur.

<!-- Installation -->
## Installation
--
##### via docker-run

  ```sh
  docker run -p 80:80 thelulu379/nuit_info_2022
  ```

##### via docker-compose

  ```sh
  ---
  version: "1.0"
  services:
    piwigo:
      image: thelulu379/nuit_info_2022:latest
      container_name: preventale
      environment:
        - PUID=1000
        - PGID=1000
        - TZ=Europe/Paris
      ports:
        - 80:80
      restart: unless-stopped
  ```



<p align="right">(<a href="#readme-top">back to top</a>)</p>


--
<!-- USAGE EXAMPLES -->
#### Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Authors
