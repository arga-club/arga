sudo curl -fsSL https://get.pnpm.io/install.sh | sh -
source $__fish_config_dir/config.fish
pnpm env use --global lts
pnpm add --global pm2 @antfu/ni

sudo yum install mariadb-server -y
sudo systemctl enable mariadb.service
sudo systemctl start mariadb.service
sudo mysql_secure_installation
alias g=git
funcsave g
alias ll='ls -la'
funcsave ll
cp .env.dev .env
sudo yum install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
nginx -t

sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --add-service=https --permanent
sudo firewall-cmd --reload
pkill -o nginx
nginx

curl -sL https://raw.githubusercontent.com/jorgebucaran/fisher/main/functions/fisher.fish | source && fisher install jorgebucaran/fisher
fisher install jethrokuan/z
alias -s rmnm="find . -name "node_modules" -type d -prune -exec rm -rf '{}' +"
funcsave rmnm
ni
nr db:push
pm2 start ecosystem.config.js
pm2 startup
