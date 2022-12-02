#/bin/bash

repository="https://github.com/BaptisteWetterwald/nuit-info-2022.git"

oldFolder="/usr/local/apache2/htdocs"

newFolder="/usr/local/apache2/htdocs/nuit-info-2022/NUIT"

confFILE="/usr/local/apache2/conf/httpd.conf"

apt update && apt install git

git clone $repository" "$oldFolder

sed -i "s/$oldFolder/$newFolder" $confFILE

apachectl restart