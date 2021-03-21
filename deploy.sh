#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
#yarn build

# 进入生成的文件夹
#cd build

git init
git add -A
git commit -m '修改字体'

# 如果你想要部署到 https://<USERNAME>.github.io
 git push -f git@github.com:fang-kang/reactBlog.git master
 git push -f git@gitee.com:fang-kang/reactblog.git master
# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:<USERNAME>/vuepress.git master:gh-pages

cd -
