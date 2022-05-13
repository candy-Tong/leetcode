export PATH=/opt/node-v16.13.1-linux-x64/bin:$PATH

node -v
npm -v
pwd

echo 'install pnpm'
npm i pnpm --ignore-scripts --registry https://mirrors.tencent.com/npm/
export PATH=node_modules/.bin:$PATH

echo 'pnpm install'
pnpm config set registry https://mirrors.tencent.com/npm/
pnpm install

echo '配置fef环境'
export PATH=$PATH:~/.fef/bin

echo '开始编译静态文件'
npm run build

echo '开始构建部署包'
npx fef -v
npx fef predeploy
