## NVM basics

NVM is a node version manager, It allows for simpler install and multiple versions of nodejs. It also keeps packages self contained per version installed.

[NVM Github page](https://github.com/creationix/nvm)

To **install** or **update** nvm, you can use using curl:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

or Wget:

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

Install nodejs

NOTE: you may have a problem installing sass with nodejs v11

```
nvm install 10
```

List all installed versions 

```
nvm list
```

To temporary use a version

```
nvm use 10
```

Set a default version

```
nvm alias default 10
```

Remove a version

```
nvm uninstall 10
```

Troubleshooting

Try removing cache and installed versions

```
nvm cache clear
```

Last resort: reinstall NVM

Remove NVM folder

```
rm -rf ~/.nvm
```

Remove variables

```
# for zsh
nano .zshrc

# for bash
nano .bashrc

# remove these lines
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  
# This loads nvm bash_completion
```

Then start with a new  NVM installation