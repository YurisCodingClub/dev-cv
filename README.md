![Open Source Love](https://img.shields.io/badge/open%20soure-%F0%9F%92%9F-blueviolet?style=flat-square)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

#

# About DevCV

I got many great responses on my article about <a href="https://dev.to/yuridevat/how-to-write-a-promising-cv-32ih">How To Write A Promising CV</a> - thank you for that.

I've been asked many times which tool is the best to create a CV like mine - easily and for free. So I thought, why not develop our own tool? Together, open source, as part of Hacktoberfest 2022?

# How to contribute

This project aims to be a beginner friendly way to your first contribution to open source. If you are looking to make your first contribution, follow the steps below.

<img align="right" width="300" src="https://docs.google.com/uc?export=download&id=1SbliQ66gfCx0uiwcG_04FAPXNMPHVE7s" alt="fork this repository" />

**If you don't have git on your machine, [install it](https://help.github.com/articles/set-up-git/).**

## Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository

<img align="right" width="300" src="https://docs.google.com/uc?export=download&id=10xHPRthNMKP8vi_mS8KjklhlLIhVlp6g" alt="clone this repository" />

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

<img align="right" width="300" src="https://docs.google.com/uc?export=download&id=1ifdWqKw4DYvhUjmH_LNNAt925S7WPNC4" alt="copy URL to clipboard" />

For example:

```
git clone https://github.com/this-is-you/dev-cv.git
```

where `this-is-you` is your GitHub username. Here you're copying the contents of the dev-cv repository on GitHub to your computer.

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd dev-cv
```

Now create a branch using the `git checkout -b` command:

```
git checkout -b your-new-branch-name
```

For example:

```
git checkout -b name-of-issue
```

## Make necessary changes and commit those changes

<img align="right" width="450" src="" alt="git status" />

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```
git add filename
```

Now commit those changes using the `git commit` command:

```
git commit -m "Name of issue"
```

### Commit message

There are different ways of writing a commit message. For more reference checkout the
article about [How to write a good commit message](https://dev.to/chrissiemhrk/git-commit-message-5e21).

For this project we are going to use following style:

**type-of-issue- + number-of-issue[action you took]**

Practical example:

`feature-11[Fix typo in README.md]`

## Push changes to GitHub

Push your changes using the command `git push`:

```
git push origin -u <add-your-branch-name>
```

replacing `<add-your-branch-name>` with the name of the branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

<img style="float: right;" src="" alt="create a pull request" />

Now submit the pull request.

<img style="float: right;" src="" alt="submit pull request" />

Soon I'll be merging all your changes into the master branch of this project. You will get a notification email once the changes have been merged.

## Where to go from here?

Congrats! You just completed the standard _fork -> clone -> edit -> pull request_ workflow that you'll encounter often as a contributor!

Celebrate your contribution and share it with your friends and followers on your social media accounts.

Now let's get you started with your next contribution, wether on this or any other great open source projects on GitHub.

Have fun 👻!
