/*
*   Due to the permission problems, most of the tests are using relative path.
*   absolute path is obviously ok, make sure you have the read and write permission
*   or you could refer to the last test case
*/

const mkdirs = require('../index')
const shell = require('shelljs')

describe('mkdirs', function() {
    afterEach(()=>{
        shell.rm('-rf', `./home`)
    })

    describe('#mkdirs(path)', function() {
        it('should mkdirs without error', function() {
            mkdirs('./home/test/test1/test')
        })
    })

    describe('#mkdirs(path, callback)', function() {
        it('should mkdirs without error', function(done) {
            mkdirs('./home/test/test2/test', done)
        }) 
    })

    describe('#mkdirs(path, mode_string)', function() {
        it('should mkdirs without error', function() {
            mkdirs('./home/test/test3/test', '777')
        }) 
    })

    describe('#mkdirs(path, mode_number)', function() {
        it('should mkdirs without error', function() {
            mkdirs('./home/test/test4/test', 777)
        }) 
    })

    describe('#mkdirs(path, mode, callback)', function() {
        it('should mkdirs without error', function(done) {
            mkdirs('./home/test/test5/test', '777', done)
        })
    })

    describe('#mkdirs(invalidpath, callback)', function() {
        it('should mkdirs with error', function(done) {
            mkdirs(123, (err, fp)=>{
                expect(err instanceof TypeError).to.be.true
                return done()
            })
        })
    })

    describe('#mkdirs(path, invalid_mode, callback)', function() {
        it('should mkdirs with error', function(done) {
            mkdirs('./home/test/test7/test', 'abc', (err, fp)=>{
                expect(err instanceof TypeError).to.be.true
                return done()
            })
        })
    })

    describe('#mkdirs(invalidpath)', function() {
        it('should mkdirs with error', function() {
            expect(()=>mkdirs(123)).to.throw(TypeError)
        })
    })

    describe('#mkdirs(unpermitted_dir, callback)', function() {
        it.skip('should mkdirs with error', function(done) {
            mkdirs('/etc/test/test9', (err, fp)=>{
                expect(err instanceof Error).to.be.true
                return done()
            })
        })
    })
})
