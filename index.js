const fs = require('fs')
const path = require('path')
const AdmZip = require('adm-zip')

class MyPlugin {
  constructor (options) {
    // this.dirname = options.dirname || "00000001" 
    // this.subDirname = options.subDirectoryName || 'www'
    this.dirList = options.dirList
    this.output = options.output || 'offlinePackage'
    this.publicPath = options.publicPath
  }
  apply (compiler) {
    compiler.hooks.done.tap('MyPlugin', (compliation) => {
      console.log(compiler.options)
      setTimeout(() => {
        generatorDirAndCompress(this.dirList, this.output, compiler.options.output.path)
      }, 10)
    })
  }
}

function generatorDirAndCompress (dirList, output, buildOutput) {
  const outputDir = path.resolve(process.cwd(), output)

  const temp = path.resolve(process.cwd(), `${output}/temp`)

  // const target = path.resolve(process.cwd(), `${temp}/${dirname}`)
  // const sub = path.resolve(process.cwd(), `${target}/${subDirname}`)
  // const zipTarget = path.resolve(process.cwd(), `${outputDir}/${dirname}.zip`)
  // const dirList = [outputDir, temp, target, sub]

  let dirs = []
  dirList.forEach((dir, index) => {
    let tpath = ''
    if (index === 0) {
      tpath = path.resolve(process.cwd(), `${temp}/${dir}`)
    } else {
      tpath = path.resolve(process.cwd(), `${dirs[index - 1]}/${dir}`)
    }
    dirs.push(tpath)
  })
  const allList = [outputDir,temp, ...dirs]

  let zipTarget = path.resolve(process.cwd(), `${outputDir}/00000001.zip`)
  if (dirs.length) {
    zipTarget = path.resolve(process.cwd(), `${outputDir}/${dirList[0]}.zip`)
  }
  


  console.log(allList)
  checkDirExists(allList)
  readAndCopy(buildOutput, allList.length ? allList[allList.length - 1] : './')
  doCompressing(temp, zipTarget)
  clearDir(temp)
}

function checkDirExists (list) {
  list.forEach((path) => {
    if (fs.existsSync(path)) {
      clearDir(path)
      fs.mkdirSync(path)
    } else {
      fs.mkdirSync(path)
    }
  })
}

function clearDir (path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(file => {
      let curPath = `${path}/${file}`
      if (fs.lstatSync(curPath).isDirectory()) {
        clearDir(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}

function readAndCopy (source, target) {
  fs.readdirSync(source).forEach(file => {
    let cur = `${source}/${file}`
    let curTarget = `${target}/${file}`
    if (fs.lstatSync(cur).isDirectory()) {
      fs.mkdirSync(curTarget)
      readAndCopy(cur, curTarget)
    } else {
      let file = fs.readFileSync(cur, 'utf8')
      fs.writeFileSync(curTarget, file, 'utf8')
    }
  })
}

function doCompressing(target, zipTarget) {
  const file = new AdmZip()
  file.addLocalFolder(target)
  fs.writeFileSync(zipTarget, file.toBuffer())
}

module.exports = MyPlugin