cd /etc/yum.repos.d/
wget https://download.opensuse.org/repositories/shells:fish:release:3/CentOS-9_Stream/shells:fish:release:3.repo
yum install fish -y
chsh -s $(which fish)
fish deploy-complete.fish
