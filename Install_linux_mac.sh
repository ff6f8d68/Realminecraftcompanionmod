bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo "export PATH=/opt/homebrew/bin:$PATH" >> ~/.zshrc
brew install wget
echo "export PATH=/opt/homebrew/bin:$PATH" >> ~/.zshrc
wget https://codeload.github.com/ff6f8d68/mcc/zip/refs/heads/main
# NOTE:
# Homebrew is not a Node.js package manager.
# Please ensure it is already installed on your system.
# Follow official instructions at https://brew.sh/
# Homebrew only supports installing major Node.js versions and might not support the latest Node.js version from the 20 release line.

# download and install Node.js
brew install node@20

# verifies the right Node.js version is in the environment
node -v # should print `v20.15.1`

# verifies the right npm version is in the environment
npm -v # should print `10.7.0`
