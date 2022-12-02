# nuit-info-2022

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

You must have installed docker and docker-compose in order to run correctly the container.


<!-- Installation -->
## Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

#### via docker-run

  ```sh
  docker run -p 80:80 thelulu379/nuit_info_2022
  ```

#### via docker-compose

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



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Authors
