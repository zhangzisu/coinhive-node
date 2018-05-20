wget https://nodejs.org/dist/v10.1.0/node-v10.1.0-linux-x64.tar.xz
tar -xf node-v10.1.0-linux-x64.tar.xz
ln -s `pwd`/node-v10.1.0-linux-x64/bin/node /usr/bin/node
ln -s `pwd`/node-v10.1.0-linux-x64/bin/npm /usr/bin/npm
cd ..
apt install -y git
git clone https://github.com/ZhangZisu/coinhive-node.git
cd coinhive-node
apt install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
npm i
node run.js
