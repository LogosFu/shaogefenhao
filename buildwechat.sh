folder=01.建模/02.领域驱动设计
fileName=17.ddd-limitation
imageHost=https://github.com/shaogefenhao/wiki/raw/master/docs/$folder/

rm -rf build
mkdir build

cat docs/${folder}/${fileName}.md > build/output.md
sed -i "" "s@$fileName@$imageHost/$fileName@g" build/output.md
sed -i "" "s@src=$fileName\"@src=\"$imageHost/$fileName@g" build/output.md
pandoc -s build/output.md -w html --template=template/wechat_template.html -o build/wechat.html  --title-prefix email --highlight-style pygments

juice build/wechat.html build/wechat.html
