# nuit-info-2022

<!-- Installation -->

####via docker-run

  ```sh
  docker run -p 80:80 thelulu379/nuit_info_2022
  ```

###via docker-compose

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


##Authors
