set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # build
  npm run build

  # update version
  # npm version $VERSION --message "[release] $VERSION"
  npm run update:version $VERSION

  # public
  npm publish

  # clean
  npm run clean
fi