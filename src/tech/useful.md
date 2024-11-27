# 实用技术

::: tip 前言
工欲善其事，必先利其器
:::

## 服务器免密登录三步曲

```sh {5}
# 在~/.ssh/目录下生成：公钥id_rsa.pub 和 私钥id_rsa
ssh-keygen

# 将生成的公钥 id_rsa.pub 发送至目标服务器，期间需要输入登录密码
ssh-copy-id root@xxx.xxx.xx.xxx

# 尝试免密登录目标服务器
ssh root@xxx.xxx.xx.xxx
```

## 在 Gitee 上部署自己的网站
::: warning 警告
由于**Gitee 网站**审核力度非常变态，普通的博客也很有可能无法正常部署，提示有违禁内容
:::
::: tip 建议
建议将自己的网站放到**GitHub 仓库**里，并开启 Pages 服务，具体流程差不多
:::

1. 打开 [gitee.com](https://gitee.com) 并注册一个账号，登录绑定自己的邮箱和手机号
2. 在 gitee 上**新建一个代码仓库**，仓库名称根据个人喜好来定，比如 myRepo
3. 复制代码仓库地址
   ![图片](/tech/t1.png)

4. 下载并安装代码版本管理工具 [git](https://git-scm.com/downloads)
5. 在本地打开一个文件夹，要在这个文件夹下面放置刚才新建的代码仓库
6. 在打开的文件夹中空白处，右击鼠标，选择 **Git Bash Here**，打开 git 命令行窗口
7. 拉取代码仓库：在 git bash 窗口里输入

```bash
git clone https://你的代码仓库地址.git
```

8. 上一步好像需要输入 gitee 的用户名和密码
9. 进入到你的代码仓库

```bash
cd myRepo
```

10. 将包含了 index.html 的相关文件复制进来
    ::: tip
    根目录下必须有 index.html 文件<br>
    文件中不能有二维码图片
    :::
11. 提交代码到远程仓库

```bash
git add .
git commit -m '提交代码'
git push
```

12. 返回 gitee 上的代码仓库页面，选择 **服务 > Pages**
    ![图片](/tech/t2.png)
13. 开启 Pages 服务前，需要先实名认证
14. 认证通过后，就可以开启服务了，开启后会自动生成**网站地址**
    ![图片](/tech/t3.png)
15. 以后改完代码后，执行步骤 11 和步骤 14 即可

## 在 GitHub 上部署自己的网站

::: warning 警告
由于众所周知的原因，GitHub 在国内似墙非墙，打开或者提交代码需要尝试多次，看运气
:::

1. 打开 [github.com](https://github.com)，注册一个账号并登录
2. 在 github 上**新建一个代码仓库**，仓库名称根据个人喜好来定，比如 myRepo
3. 复制代码仓库地址
4. 下载并安装代码版本管理工具 [git](https://git-scm.com/downloads)
5. 在本地打开一个文件夹，要在这个文件夹下面放置刚才新建的代码仓库
6. 在打开的文件夹中空白处，右击鼠标，选择 **Git Bash Here**，打开 git 命令行窗口
7. 拉取代码仓库：在 git bash 窗口里输入

```bash
git clone https://你的代码仓库地址.git
```

8. 上一步好像需要输入 github 的用户名和密码
9. 进入到你的代码仓库并新建一个文件夹 docs

```bash
cd myRepo
mkdir docs
```

10. 将包含了 index.html 的相关文件复制到 docs 文件夹里
11. 提交代码到远程仓库

```bash
git add .
git commit -m '提交代码'
git push
```

12. 返回代码仓库页面，选择 **Settings > Pages > 选择 Docs > Save**，即可开启 Pages 服务
    ![图片](/tech/t4.png)
13. 后续每次提交更新文件，页面会自动加载最新版