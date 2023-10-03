/* https://hcaptcha.com/license */
var image_label_area_select = function(t, i, e, s, o, h, n) {
    "use strict";
    function a() {
        i.Extend.self(this, i.DomComponent, "example-image"),
        this.width = 0,
        this.height = 0,
        this._image = null,
        this._visible = !1,
        this.$image = this.createElement(".image")
    }
    function l() {
        i.Extend.self(this, i.DomComponent, "bounding-box-example"),
        this.width = 0,
        this.height = 0,
        this._visible = !1,
        this.$container = this.createElement(".example-wrapper")
    }
    function r() {
        i.Extend.self(this, i.DomComponent, "challenge-prompt"),
        this.state = {
            locales: null
        },
        this.width = 0,
        this.height = 0,
        this._visible = !1,
        this.$copy = this.createElement("h2", ".prompt-text"),
        this.$block = this.createElement(".prompt-block")
    }
    function p() {
        i.Extend.self(this, i.BaseComponent),
        this.x = 0,
        this.y = 0,
        this.opacity = 1,
        this.fillColor = null,
        this.width = 100,
        this.height = 50,
        this.sale = 1,
        this.pointHeight = 10,
        this.pointWidth = 15,
        this.line = {
            vertical: this.initComponent(o.Path),
            horizontal: this.initComponent(o.Path)
        },
        this.line.vertical.fill = !0,
        this.line.horizontal.fill = !0,
        this.line.vertical.fillColor = "#fff",
        this.line.horizontal.fillColor = "#fff",
        this.line.vertical.close(!0),
        this.line.horizontal.close(!0);
        for (var t = {
            x: 0,
            y: 0
        }, e = 0; e < 4; e++)
            this.line.vertical.addPoint(t),
            this.line.horizontal.addPoint(t)
    }
    function c() {
        i.Extend.self(this, i.BaseComponent),
        this.x = 0,
        this.y = 0,
        this.radius = 0,
        this.opacity = 1,
        this.fillColor = null,
        this.width = 100,
        this.height = 50,
        this.sale = 1,
        this.pointHeight = 10,
        this.pointWidth = 15,
        this.path = this.initComponent(o.Path),
        this.path.close(!0),
        this.path.stroke = !1,
        this.path.strokeWidth = 4,
        this.path.fill = !0,
        this.path.fillColor = "#118683";
        for (var t = 0; t < 4; t++)
            this.path.addPoint({
                x: 0,
                y: 0
            })
    }
    function d() {
        i.Extend.self(this, o.ReticlePoint),
        this.x = 0,
        this.y = 0,
        this.fillColor = "#fff",
        this.radius = 5
    }
    function u() {
        i.Extend.self(this, i.BaseComponent),
        this.x = 0,
        this.y = 0,
        this.radius = 0,
        this.scale = 1.75,
        this.visible = !1,
        this.type = "reticle",
        this.offset = 0,
        this.pixelData = null,
        this.taskImage = null,
        this.zoom = this.initComponent(o.Path),
        this.outline = this.initComponent(o.Path),
        this.back = this.initComponent(o.Path),
        this.reticle = this.initComponent(p),
        this.reticlePoint = this.initComponent(d),
        this.point = this.initComponent(c),
        this.color = new e.Color,
        this.zoom.close(!0),
        this.outline.close(!0),
        this.back.close(!0),
        this.outline.stroke = !0,
        this.outline.strokeWidth = 4,
        this.back.fill = !0,
        this.back.fillColor = "#ebebeb",
        this.point.setFill(!0, "#fff"),
        this.point.setStroke(!1, "#fff", 2);
        for (var t = 0; t < 4; t++) {
            var s = this.zoom.addPoint({
                x: 0,
                y: 0
            });
            this.outline.addPoint(s),
            this.back.addPoint(s)
        }
    }
    function y() {
        i.Extend.self(this, i.DomComponent, "challenge-description"),
        this.width = 0,
        this.height = 0,
        this._visible = !1,
        this._length = 0,
        this.$copy = this.createElement(".description-text"),
        this.setText()
    }
    function f(t) {
        i.Extend.self(this, i.BaseComponent),
        this.bounding = null,
        this.dimensions = null,
        this.scale = 1,
        this._image = null,
        this._aspect = 1,
        this._visible = !1,
        this._offset = 0,
        this.element = this.initComponent(o.Path)
    }
    s = s && Object.prototype.hasOwnProperty.call(s, "default") ? s["default"] : s,
    h = h && Object.prototype.hasOwnProperty.call(h, "default") ? h["default"] : h,
    i.Extend.proto(a, i.DomComponent),
    a.prototype.style = function(t, i) {
        this.css({
            width: t,
            height: i,
            borderRadius: 4,
            right: 0,
            top: 0,
            position: "absolute",
            overflow: "hidden"
        }),
        this.$image.css({
            opacity: this._visible ? 1 : 0
        }),
        null !== this._image && this.$image.backgroundImage(this._image, t, i, {
            cover: !0,
            center: !0
        }),
        this.width = t,
        this.height = i
    }
    ,
    a.prototype.load = function(t) {
        var e = this;
        return i.Loader.image(t).then((function(t) {
            null !== e.dom && (e._image = t,
            e.$image.backgroundImage(e._image, e.height, e.height, {
                cover: !0,
                center: !0
            }))
        }
        ))["catch"]((function(t) {}
        ))
    }
    ,
    a.prototype.display = function(t) {
        this._visible = t,
        this.$image.css({
            opacity: t ? 1 : 0
        })
    }
    ,
    i.Extend.proto(l, i.DomComponent),
    l.prototype.style = function(t, i) {
        var e = this.hasExamples() ? i ? 60 : 106 : 0
          , s = (t - 5 * (this.children.length - 1)) / this.children.length;
        this.css({
            width: t,
            height: e,
            position: "absolute",
            backgroundColor: this._visible ? "#fff" : "#e6e6e6",
            overflow: "hidden",
            borderRadius: 4
        }),
        this.$container.css({
            width: t,
            height: e
        });
        for (var o = -1; ++o < this.children.length; )
            this.children[o].style(s, e),
            this.children[o].css({
                position: "absolute",
                left: o * s + 5 * o
            });
        this.height = e,
        this.width = t
    }
    ,
    l.prototype.load = function(t) {
        var i, e, s = [];
        if (this.loaded = 0,
        !1 === Array.isArray(t) && (t = [t]),
        this.children.length > 0)
            for (i = this.children.length; --i > -1; )
                e = this.children[i],
                this.children.splice(i, 1),
                e.destroy();
        for (i = -1; ++i < t.length; )
            e = this.initComponent(a, null, this.$container),
            s.push(e.load(t[i]));
        return Promise.all(s)
    }
    ,
    l.prototype.hasExamples = function() {
        return this.children.length > 0
    }
    ,
    l.prototype.display = function(t) {
        this._visible = t,
        this.css({
            display: this.hasExamples() ? "block" : "none",
            backgroundColor: t ? "#fff" : "#e6e6e6"
        });
        for (var i = -1; ++i < this.children.length; )
            this.children[i].display(t)
    }
    ,
    i.Extend.proto(r, i.DomComponent),
    r.prototype.style = function(t, i) {
        var e = i ? 14 : 16
          , s = i ? 40 : 60;
        this.css({
            width: t,
            height: s,
            textAlign: "left",
            display: "table"
        }),
        this.$copy.css({
            opacity: this._visible ? 1 : 0,
            height: s,
            verticalAlign: "middle",
            display: "table-cell",
            textAlign: "center",
            fontSize: e,
            fontWeight: 700,
            color: "#707070"
        }),
        this.$block.css({
            opacity: this._visible ? 0 : 1,
            position: "absolute",
            top: s / 4,
            left: 0,
            zIndex: 5,
            width: t,
            height: s / 2,
            backgroundColor: n.Color.grey.placeholder,
            borderRadius: 4
        }),
        this.width = t,
        this.height = s
    }
    ,
    r.prototype.setLocaleDict = function(t) {
        this.state.locales = t
    }
    ,
    r.prototype.display = function(t) {
        this._visible = t,
        this.$copy.css({
            opacity: t ? 1 : 0
        }),
        this.$block.css({
            opacity: t ? 0 : 1
        })
    }
    ,
    r.prototype.setText = function() {
        var t = h.getBestTrans(this.state.locales);
        this.$copy.text(t)
    }
    ,
    i.Extend.proto(p, i.BaseComponent),
    p.prototype.size = function(t, i) {
        for (var e = this.x, s = this.y, o = t / 2, h = i / 2, n = 0; n < 4; n += 2) {
            var a = this.line.vertical.getPoint(n)
              , l = this.line.vertical.getPoint(n + 1)
              , r = this.line.horizontal.getPoint(n)
              , p = this.line.horizontal.getPoint(n + 1);
            a.set({
                x: n >= 2 ? e + h : e - h,
                y: n >= 2 ? s + o : s - o
            }),
            l.set({
                x: n >= 2 ? e - h : e + h,
                y: n >= 2 ? s + o : s - o
            }),
            r.set({
                x: n >= 2 ? e + o : e - o,
                y: n >= 2 ? s + h : s - h
            }),
            p.set({
                x: n >= 2 ? e - o : e + o,
                y: n >= 2 ? s + h : s - h
            })
        }
    }
    ,
    p.prototype.place = function(t, i) {
        var e = t - this.x
          , s = i - this.y;
        this.line.vertical.move(e, s),
        this.line.horizontal.move(e, s),
        this.x = t,
        this.y = i
    }
    ,
    p.prototype.move = function(t, i) {
        this.line.vertical.move(t, i),
        this.line.horizontal.move(t, i),
        this.x += t,
        this.y += i
    }
    ,
    p.prototype.draw = function(t) {
        t.ctx.save(),
        t.ctx.globalAlpha = .85,
        this.line.vertical.draw(t),
        this.line.horizontal.draw(t),
        t.ctx.restore()
    }
    ,
    i.Extend.proto(c, i.BaseComponent),
    c.prototype.size = function(t, i) {
        for (var e = t / 2, s = e * (4 * (Math.sqrt(2) - 1) / 3), o = this.x, h = this.y, n = 0; n < 4; n++) {
            var a = n % 2 == 0 ? s : 0
              , l = n % 2 == 1 ? s : 0;
            n >= 2 && (a *= -1,
            l *= -1);
            var r = {
                x: o,
                y: h += (n % 3 == 0 ? -1 : 1) * e
            }
              , p = {
                x: o - a,
                y: h - l
            }
              , c = {
                x: o + a,
                y: h + l
            };
            this.path.getPoint(n).set(r, p, c),
            o += (n % 3 == 0 ? 1 : -1) * e
        }
        this.path.strokeWidth = i
    }
    ,
    c.prototype.place = function(t, i) {
        var e = t - this.x
          , s = i - this.y;
        this.path.move(e, s),
        this.x = t,
        this.y = i
    }
    ,
    c.prototype.move = function(t, i) {
        this.path.move(t, i),
        this.x += t,
        this.y += i
    }
    ,
    c.prototype.setFill = function(t, i) {
        this.path.fill = t,
        i && (this.path.fillColor = i)
    }
    ,
    c.prototype.setStroke = function(t, i, e) {
        this.path.stroke = t,
        i && (this.path.strokeColor = i),
        e && (this.path.strokeWidth = e)
    }
    ,
    c.prototype.draw = function(t) {
        this.path.draw(t)
    }
    ,
    i.Extend.proto(d, o.ReticlePoint),
    d.prototype.size = function(t) {
        this.radius = t
    }
    ,
    d.prototype.place = function(t, i) {
        this.x = t,
        this.y = i
    }
    ,
    d.prototype.move = function(t, i) {
        this.x += t,
        this.y += i
    }
    ,
    i.Extend.proto(u, i.BaseComponent),
    u.prototype.setPixelData = function(t, i) {
        this.pixelData = i,
        this.taskImage = t
    }
    ,
    u.prototype.size = function(t, i) {
        this.offset = s.System.mobile ? t / 1.25 : 0,
        this.y = this.y - this.offset;
        for (var e = this.x, o = this.y, h = t / 2, n = h * (4 * (Math.sqrt(2) - 1) / 3), a = 0; a < 4; a++) {
            var l = this.zoom.getPoint(a)
              , r = this.outline.getPoint(a)
              , p = this.back.getPoint(a)
              , c = a % 2 == 0 ? n : 0
              , d = a % 2 == 1 ? n : 0;
            a >= 2 && (c *= -1,
            d *= -1);
            var u = {
                x: e,
                y: o += (a % 3 == 0 ? -1 : 1) * h
            }
              , y = {
                x: e - c,
                y: o - d
            }
              , f = {
                x: e + c,
                y: o + d
            };
            l.set(u, y, f),
            r.set(u, y, f),
            p.set(u, y, f),
            e += (a % 3 == 0 ? 1 : -1) * h
        }
        this.radius = h,
        this.reticle.size(t / 4, 2 / i.scale),
        this.reticle.place(e, o),
        this.reticlePoint.place(e, o),
        this.point.size(t / 8, 2 / i.scale),
        this.point.place(e, o)
    }
    ,
    u.prototype.move = function(t) {
        var i = t.x - this.x
          , e = t.y - this.offset - this.y;
        this.zoom.move(i, e),
        this.outline.move(i, e),
        this.back.move(i, e),
        this.point.move(i, e),
        this.reticle.move(i, e),
        this.reticlePoint.move(i, e),
        this.x = t.x,
        this.y = t.y - this.offset
    }
    ,
    u.prototype.display = function(t, i) {
        this.type = i || "reticle",
        this.visible = t
    }
    ,
    u.prototype.render = function(t) {
        if (this.visible && (!this.taskImage || this.taskImage._image)) {
            var i = Math.round(this.x)
              , s = Math.round(this.y + this.offset)
              , o = 4 * (i * t.dpr + s * t.dpr * t.element.width);
            this.color.r = this.pixelData[o],
            this.color.g = this.pixelData[o + 1],
            this.color.b = this.pixelData[o + 2],
            this.outline.strokeColor = this.color.getHex(),
            t.ctx.save(),
            t.ctx.shadowColor = "rgba(0,0,0,0.85)",
            t.ctx.shadowBlur = 10,
            this.outline.draw(t),
            t.ctx.restore(),
            t.ctx.save(),
            this.zoom.draw(t),
            t.ctx.clip(),
            this.back.draw(t);
            var h = this.taskImage.dimensions.width / this.taskImage._image.width
              , n = e.MathUtil.range(i, this.taskImage.bounding.left, this.taskImage.bounding.right, 0, this.taskImage._image.width)
              , a = e.MathUtil.range(s, this.taskImage.bounding.top, this.taskImage.bounding.bottom, 0, this.taskImage._image.height)
              , l = Math.round(2 * this.radius) / h
              , r = e.MathUtil.clamp(n - l / 2, 0, this.taskImage.bounding.right / h)
              , p = e.MathUtil.clamp(a - l / 2, 0, this.taskImage.bounding.bottom / h)
              , c = Math.round(2 * this.radius) * this.scale
              , d = this.x - c / 2
              , u = this.y - c / 2;
            n - l / 2 <= 0 && (d += e.MathUtil.range(n - l / 2, -l / 2, 0, c / 2, 0)),
            a - l / 2 <= 0 && (u += e.MathUtil.range(a - l / 2, -l / 2, 0, c / 2, 0)),
            t.ctx.drawImage(this.taskImage.getImage(), r, p, l, l, d, u, c, c),
            t.ctx.restore(),
            this.outline.draw(t),
            "point" === this.type ? this.reticlePoint.draw(t) : ("handle" === this.type && this.point.draw(t),
            this.reticle.draw(t))
        }
    }
    ,
    i.Extend.proto(y, i.DomComponent),
    y.prototype.style = function(t) {
        var i = this._length > 40 ? 30 : 20;
        this.css({
            width: 240,
            left: (t - 240) / 2,
            height: i,
            textAlign: "center",
            display: "table"
        }),
        this.$copy.css({
            opacity: this._visible ? 1 : 0,
            height: i,
            letterSpacing: .25,
            display: "inline-block",
            textAlign: "center",
            fontSize: 11,
            fontWeight: 700,
            color: "#b3b3b3"
        }),
        this.width = t,
        this.height = i
    }
    ,
    y.prototype.display = function(t) {
        this._visible = t,
        this.$copy.css({
            opacity: t ? 1 : 0
        })
    }
    ,
    y.prototype.setText = function(t) {
        var i = t ? "Press and hold to zoom. {{icon}}" : "Select {{icon}} to enable Zoom."
          , e = h.translate(i, {
            icon: "&#128269;"
        });
        this.$copy.text(e),
        this._length = e.length
    }
    ,
    i.Extend.proto(f, i.BaseComponent),
    f.prototype.load = function(t) {
        var e = this;
        return i.Loader.image(t, {
            crossOrigin: "Anonymous"
        }).then((function(t) {
            null !== e.dom && (e._image = t,
            e._aspect = t.width / t.height,
            e.size.call(e, e.areaWidth, e.areaHeight, e._offset))
        }
        ))
    }
    ,
    f.prototype.getImage = function() {
        return this._image && this._image.element.dom
    }
    ,
    f.prototype.inBounds = function(t) {
        return t.x >= this.bounding.left && t.x <= this.bounding.right && t.y >= this.bounding.top && t.y <= this.bounding.bottom
    }
    ,
    f.prototype.size = function(t, i, e) {
        var s = this._aspect
          , o = t - 20
          , h = o / s;
        h > i - 20 && (o = (h = i - 20) * s);
        var n = (t - o) / 2
          , a = e + (i - h) / 2
          , l = n + o
          , r = a + h
          , p = [{
            x: n,
            y: a
        }, {
            x: l,
            y: a
        }, {
            x: l,
            y: r
        }, {
            x: n,
            y: r
        }];
        this.element.setPoints(p),
        this.dimensions = this.element.getDimensions(),
        this.bounding = this.element.getBounding(),
        this.areaWidth = t,
        this.areaHeight = i,
        this.scale = this._image ? o / this._image.width : 1,
        this._offset = e || this._offset
    }
    ,
    f.prototype.draw = function(t) {
        this._visible && (t.ctx.save(),
        t.ctx.roundedRect(this.bounding.left, this.bounding.top, this.dimensions.width, this.dimensions.height, 4),
        t.ctx.clip(),
        this._image && t.ctx.drawImage(this._image.element.dom, this.bounding.left, this.bounding.top, this.dimensions.width, this.dimensions.height),
        t.ctx.restore())
    }
    ,
    f.prototype.display = function(t) {
        this._visible = t
    }
    ;
    function g(t) {
        i.Extend.self(this, i.BaseComponent),
        this.width = 0,
        this.height = 0,
        this.visible = !1,
        this._buttonSize = 36,
        this._buttonOffset = 10,
        this._iconOffset = 8,
        this.bounding = null,
        this.isMagnifyEnabled = !1,
        this.element = this.initComponent(o.Path),
        this.pathSVG = new o.PathSVG("data:image/svg+xml,%3csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M8.33333 14.6667C11.555 14.6667 14.1667 12.055 14.1667 8.83333C14.1667 5.61167 11.555 3 8.33333 3C5.11167 3 2.5 5.61167 2.5 8.83333C2.5 12.055 5.11167 14.6667 8.33333 14.6667Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M17.5 18L12.5 13' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e")
    }
    function m() {
        i.Extend.self(this, i.BaseComponent),
        this.bounding = null,
        this._visible = !1,
        this._scale = 1,
        this.image = this.initComponent(f),
        this.element = this.initComponent(o.Path),
        this["interface"] = this.initComponent(g),
        this.element.fillColor = "#ebebeb",
        this.element.fill = !1
    }
    i.Extend.proto(g, i.BaseComponent),
    g.prototype.inBounds = function(t) {
        if (this.visible && this.bounding) {
            var i = this.bounding;
            return t.x >= i.left && t.x <= i.right && t.y >= i.top && t.y <= i.bottom
        }
    }
    ,
    g.prototype.toggleMagnify = function(t) {
        this.isMagnifyEnabled = t
    }
    ,
    g.prototype.display = function(t) {
        this.visible = t,
        this.height = t ? 50 : 0
    }
    ,
    g.prototype.size = function(t, i) {
        this.visible && (this.width = t,
        this.height = i)
    }
    ,
    g.prototype.place = function(t, i, e) {
        this.visible && (this.bounding = {
            left: this._buttonOffset,
            right: this._buttonSize + this._buttonOffset,
            top: e + i - this.height,
            bottom: e + this._buttonSize + i - this.height
        })
    }
    ,
    g.prototype.draw = function(t) {
        if (this.visible && this.bounding) {
            var i = this.bounding;
            t.ctx.save(),
            t.ctx.roundedRect(i.left, i.top, this._buttonSize, this._buttonSize, 4 / t.scale),
            t.ctx.fillStyle = this.isMagnifyEnabled ? "#47566B" : "#ebebeb",
            t.ctx.fill(),
            t.ctx.strokeStyle = this.isMagnifyEnabled ? "#fff" : "#47566B",
            t.ctx.lineWidth = 2,
            this.pathSVG.move(i.left + this._iconOffset, i.top + this._iconOffset),
            this.pathSVG.drawSVG(t),
            t.ctx.restore()
        }
    }
    ,
    i.Extend.proto(m, i.BaseComponent),
    m.prototype.display = function(t) {
        this._visible = t,
        this.image.display(t)
    }
    ,
    m.prototype.inImageBounds = function(t) {
        return this.image.inBounds(t)
    }
    ,
    m.prototype.inButtonBounds = function(t) {
        return this["interface"].inBounds(t)
    }
    ,
    m.prototype.inBounds = function(t) {
        return t.x >= this.bounding.left && t.x <= this.bounding.right && t.y >= this.bounding.top && t.y <= this.bounding.bottom
    }
    ,
    m.prototype.getBounding = function() {
        return this.image.bounding
    }
    ,
    m.prototype.size = function(t, i, e, s) {
        var o = 0 + t
          , h = e + i
          , n = [{
            x: 0,
            y: e
        }, {
            x: o,
            y: e
        }, {
            x: o,
            y: h
        }, {
            x: 0,
            y: h
        }];
        this.element.setPoints(n),
        this.bounding = this.element.getBounding(),
        this.image.size(t, i - this["interface"].height, e),
        this["interface"].place(t, i, e),
        this.width = t,
        this.height = i,
        this._scale = s
    }
    ,
    m.prototype.load = function(t) {
        return this.image.load(t)
    }
    ,
    m.prototype.toggleMagnify = function(t) {
        return this["interface"].toggleMagnify(t)
    }
    ,
    m.prototype.render = function(t) {
        var i = this.element.getPoint(0);
        t.ctx.roundedRect(i.x, i.y, this.width, this.height, 4 / t.scale),
        t.ctx.fillStyle = this.element.fillColor,
        t.ctx.fill(),
        this.image.draw(t),
        this["interface"].draw(t)
    }
    ;
    var x = 1 - 4 / 3 * (Math.sqrt(2) - 1);
    function v() {
        i.Extend.self(this, i.BaseComponent),
        this.shape = "pin",
        this.x = 0,
        this.y = 0,
        this.opacity = 1,
        this.tip = !1,
        this.mobile = !1,
        this._minimized = !1,
        this.fillColor = null,
        this.width = 100,
        this.height = 50,
        this.sale = 1,
        this.pointHeight = 10,
        this.pointWidth = 15,
        this.path = this.initComponent(o.Path),
        this.path.fill = !0;
        for (var t = {
            x: 0,
            y: 0
        }, e = 0; e < 11; e++)
            this.path.addPoint(t);
        this.path.close(!0),
        this.bounding = this.path.getBounding()
    }
    function b(t, i, e, s, o, h) {
        var n = e.x - s.width / 2
          , a = e.x + s.width / 2
          , l = e.y - o.height - s.height
          , r = e.y - o.height
          , p = function(t, i, e, s, o) {
            for (var h = o * x, n = 0, a = 0, l = [], r = 0; r < 4; r++) {
                var p = {
                    x: 0,
                    y: 0
                }
                  , c = {
                    x: 0,
                    y: 0
                }
                  , d = {
                    x: 0,
                    y: 0
                }
                  , u = {
                    x: 0,
                    y: 0
                }
                  , y = {
                    x: 0,
                    y: 0
                }
                  , f = {
                    x: 0,
                    y: 0
                };
                n = r < 2 ? i : t,
                a = 0 === r || 3 === r ? e : s,
                0 === r ? (p.x = n - o,
                p.y = a,
                c.x = n,
                c.y = a + o,
                d.x = p.x - h,
                d.y = p.y,
                u.x = p.x + h,
                u.y = p.y,
                y.x = c.x,
                y.y = c.y - h,
                f.x = c.x,
                f.y = c.y + h) : 1 === r ? (p.x = n,
                p.y = a - o,
                d.x = p.x,
                d.y = p.y - h,
                u.x = p.x,
                u.y = p.y + h,
                c.x = n - o,
                c.y = a,
                y.x = c.x + h,
                y.y = c.y,
                f.x = c.x - h,
                f.y = c.y) : 2 === r ? (p.x = n + o,
                p.y = a,
                d.x = p.x + h,
                d.y = p.y,
                u.x = p.x - h,
                u.y = p.y,
                c.x = n,
                c.y = a - o,
                y.x = c.x,
                y.y = c.y + h,
                f.x = c.x,
                f.y = c.y - h) : 3 === r && (p.x = n,
                p.y = a + o,
                c.x = n + o,
                c.y = a,
                d.x = p.x,
                d.y = p.y + h,
                u.x = p.x,
                u.y = p.y - h,
                y.x = c.x - h,
                y.y = c.y,
                f.x = c.x + h,
                f.y = c.y),
                l.push({
                    point: p,
                    handleIn: d,
                    handleOut: u
                }),
                l.push({
                    point: c,
                    handleIn: y,
                    handleOut: f
                })
            }
            return l
        }(n, a, l, r, i)
          , c = function(t, i, e) {
            var s = [];
            return s.push({
                point: {
                    x: t + e.width / 2,
                    y: i
                },
                handleIn: {
                    x: t + e.width / 2 + 4 * x,
                    y: i
                },
                handleOut: {
                    x: t + e.width / 2 - 4 * x,
                    y: i
                }
            }),
            s.push({
                point: {
                    x: t,
                    y: i + e.height
                },
                handleIn: {
                    x: t + 4 * x,
                    y: i + e.height
                },
                handleOut: {
                    x: t - 4 * x,
                    y: i + e.height
                }
            }),
            s.push({
                point: {
                    x: t - e.width / 2,
                    y: i
                },
                handleIn: {
                    x: t - e.width / 2 + 4 * x,
                    y: i
                },
                handleOut: {
                    x: t - e.width / 2 - 4 * x,
                    y: i
                }
            }),
            s
        }(e.x, r, o)
          , d = 0
          , u = 0
          , y = null
          , f = Math.floor(t.getLength() / 2);
        t.forEachPoint((function(t) {
            d < f - 1 || d > f + 1 ? (u = d > Math.ceil(f) ? d - Math.ceil(f / 2) : d,
            y = p[u],
            t.set.apply(t, [y.point, y.handleIn, y.handleOut])) : (y = c[u = d - (f - 1)]).handleIn ? t.set.apply(t, [y.point, y.handleIn, y.handleOut]) : t.set(y.point),
            d += 1
        }
        ), !0)
    }
    function w() {
        i.Extend.self(this, i.BaseComponent),
        this.text = null,
        this.visible = !1,
        this.scale = 1,
        this.size = 12,
        this.weight = 500,
        this.typeface = "Helvetica",
        this.color = "#fff",
        this.align = "center",
        this.baseline = "middle",
        this.x = 0,
        this.y = 0
    }
    function C(t) {
        i.Extend.self(this, i.BaseComponent),
        this.key = null,
        this.value = null,
        this.scale = 1,
        this.width = 75,
        this.height = 20,
        this.mobile = !1,
        this.color = t,
        this.exhaustedColor = t.clone().saturation(.1).lightness(.75).getHex(),
        this.hoverColor = t.clone().lightness(.35).getHex(),
        this.defaultColor = t.getHex(),
        this.pin = this.initComponent(v),
        this.text = this.initComponent(w),
        this.text.display(!0),
        this.pin.setFill(this.defaultColor),
        this.pin.setPoint(0, 0),
        this.x = 0,
        this.y = 0,
        this.dimensions = null,
        this.bounding = null,
        this.coords = null,
        this.placed = 0,
        this.available = 1,
        this.exhausted = !1
    }
    i.Extend.proto(v, i.BaseComponent),
    v.prototype.size = function(t, i, e) {
        this.width = t / e,
        this.height = i / e,
        this.scale = e;
        var s = 4 / e
          , o = {
            x: this.x,
            y: this.y
        }
          , h = {
            width: this.width,
            height: this.height
        }
          , n = {
            width: this.pointWidth / e,
            height: this.pointHeight / e
        };
        b(this.path, s, o, h, n),
        this.bounding = this.path.getBounding()
    }
    ,
    v.prototype.place = function(t, i) {
        var e = t - this.x
          , s = i - this.y;
        this.path.move(e, s),
        this.x = t,
        this.y = i,
        this.bounding = this.path.getBounding()
    }
    ,
    v.prototype.move = function(t, i) {
        this.path.move(t, i),
        this.x += t,
        this.y += i,
        this.bounding = this.path.getBounding()
    }
    ,
    v.prototype.setPoint = function(t, i) {
        this.pointWidth = t !== undefined ? t : this.pointWidth,
        this.pointHeight = i !== undefined ? i : this.pointHeight;
        var e = 4 / this.scale
          , s = {
            x: this.x,
            y: this.y
        }
          , o = {
            width: this.width,
            height: this.height
        }
          , h = {
            width: this.pointWidth / this.scale,
            height: this.pointHeight / this.scale
        };
        b(this.path, e, s, o, h),
        this.bounding = this.path.getBounding()
    }
    ,
    v.prototype.hitTest = function(t) {
        var i = !1;
        return this.path.hitTest(t) && (i = {
            action: "move",
            target: this
        }),
        i
    }
    ,
    v.prototype.draw = function(t) {
        t.ctx.save(),
        t.ctx.globalAlpha = this.opacity,
        this.path.fillColor = this.fillColor,
        this.path.draw(t),
        t.ctx.restore()
    }
    ,
    v.prototype.setFill = function(t) {
        this.fillColor = t
    }
    ,
    v.prototype.minimize = function(t) {
        this.alpha = !0 === t ? .8 : 1
    }
    ,
    i.Extend.proto(w, i.BaseComponent),
    w.prototype.set = function(t) {
        this.text = h.getBestTrans(t)
    }
    ,
    w.prototype.place = function(t) {
        this.x = t.x,
        this.y = t.y
    }
    ,
    w.prototype.move = function(t, i) {
        this.x += t,
        this.y += i
    }
    ,
    w.prototype.display = function(t) {
        this.visible = t
    }
    ,
    w.prototype.draw = function(t) {
        this.visible && (t.ctx.fillStyle = this.color,
        t.ctx.textAlign = this.align,
        t.ctx.textBaseline = this.baseline,
        t.ctx.font = this.weight + " " + this.size / this.scale + "px " + this.typeface,
        t.ctx.fillText(this.text, this.x, this.y))
    }
    ,
    i.Extend.proto(C, i.BaseComponent),
    C.prototype.setData = function(t) {
        this.key = t.key,
        this.value = t.value,
        this.text.set(t.value)
    }
    ,
    C.prototype.size = function(t, i, e) {
        this.pin.size(t, i, e),
        this.bounding = this.pin.bounding,
        this.text.scale = e,
        this.text.size = 14,
        this.text.weight = 600,
        this.width = t,
        this.height = i,
        this.scale = e
    }
    ,
    C.prototype.clone = function() {
        var t = new C(this.color);
        return t.parent = this,
        t.setData({
            key: this.key,
            value: this.value
        }),
        t.size(this.width, this.height, this.scale),
        t
    }
    ,
    C.prototype.place = function(t, i) {
        this.pin.place(t, i + this.pin.height / 2);
        var e = this.pin.bounding
          , s = e.left + (e.right - e.left) / 2
          , o = e.top + 17 / this.scale;
        this.text.place({
            x: s,
            y: o
        }),
        this.x = t,
        this.y = i,
        this.bounding = this.pin.bounding,
        this.dimensions = this.pin.dimensions
    }
    ,
    C.prototype.getBounding = function() {
        return this.pin.bounding
    }
    ,
    C.prototype.move = function(t) {
        this.exhausted || (this.pin.move(t.x, t.y),
        this.text.move(t.x, t.y),
        this.x = this.pin.x,
        this.y = this.pin.y,
        this.bounding = this.pin.bounding,
        this.dimensions = this.pin.dimensions)
    }
    ,
    C.prototype.hitTest = function(t) {
        return this.pin.hitTest(t)
    }
    ,
    C.prototype.render = function(t) {
        this.pin.draw(t),
        this.text.draw(t)
    }
    ,
    C.prototype.use = function() {
        this.placed += 1,
        this.available === this.placed && (this.exhausted = !0,
        this.pin.setFill(this.exhaustedColor))
    }
    ,
    C.prototype.replenish = function() {
        this.available === this.placed && (this.exhausted = !1,
        this.pin.setFill(this.defaultColor)),
        this.placed -= 1
    }
    ,
    C.prototype.hover = function(t) {
        this.exhausted || this.pin.setFill(t ? this.hoverColor : this.defaultColor)
    }
    ;
    var k = new e.Color("#00cabf")
      , _ = new e.Color("#007bbf");
    function E() {
        i.Extend.self(this, i.BaseComponent),
        this.width = 0,
        this.height = 0,
        this.scale = 1,
        this.container = this.initComponent(o.Path),
        this.coords = {
            x: 0,
            y: 0
        },
        this.active = !1,
        this.visible = !1,
        this.selected = null,
        this.bounding = null,
        this.dimensions = null,
        this.items = []
    }
    i.Extend.proto(E, i.BaseComponent),
    E.prototype.inBounds = function(t) {
        return t.x >= this.bounding.left && t.x <= this.bounding.right && t.y >= this.bounding.top && t.y <= this.bounding.bottom
    }
    ,
    E.prototype.display = function(t) {
        this.visible = t
    }
    ,
    E.prototype.load = function(t) {
        this.active = !0;
        for (var i, e = k.blend(_, t.length), s = 0; s < t.length; s++)
            (i = new C(e[s])).setData(t[s]),
            i.index = this.items.length,
            this.items.push(i)
    }
    ,
    E.prototype.size = function(t, i, s, o) {
        var h = 1 !== o
          , n = this.items.length
          , a = 5 * (n - 1)
          , l = e.MathUtil.range(n, 3, 7, 50, 10)
          , r = t - 2 * l
          , p = h ? 75 : 50
          , c = (r - a) / n;
        c = e.MathUtil.clamp(c, 50, 75);
        for (var d, u = s + i, y = l + r, f = u + p, g = [{
            x: l,
            y: u
        }, {
            x: y,
            y: u
        }, {
            x: y,
            y: f
        }, {
            x: l,
            y: f
        }], m = l, x = u + p / 2, v = -1; ++v < n; )
            (d = this.items[v]).size(c, 35, o),
            0 === v ? m += d.pin.width / 2 + (r - d.pin.width * n + a) / 2 : v > 0 && (m += d.pin.width + 5),
            d.place(m, x);
        this.height = p + 5,
        this.width = t,
        this.scale = o,
        this.container.setPoints(g),
        this.bounding = this.container.getBounding()
    }
    ,
    E.prototype.check = function(t) {
        for (var i = !1, e = !1, s = this.items.length; --s > -1 && !1 === e; )
            e = this.items[s].hitTest(t),
            i = this.items[s];
        return !1 !== e && {
            action: e.action,
            target: e.target,
            tag: i
        }
    }
    ,
    E.prototype.select = function(t) {
        if (!1 === t.exhausted) {
            var i = t.clone();
            return i.pin.setPoint(15, 10),
            i.action = "move",
            i.place(t.x, t.y + 10 / this.scale),
            i
        }
        return !1
    }
    ,
    E.prototype.use = function(t) {
        for (var i = this.items.length; --i > -1; )
            t.key === this.items[i].key && this.items[i].use()
    }
    ,
    E.prototype.replenish = function(t) {
        for (var i = this.items.length; --i > -1; )
            this.items[i].key === t.key && this.items[i].replenish();
        t = null
    }
    ,
    E.prototype.hover = function(t, i) {
        for (var e = this.items.length; --e > -1; )
            this.items[e].hitTest(t) && "over" === i ? this.items[e].hover(!0) : this.items[e].hover(!1)
    }
    ,
    E.prototype.render = function(t) {
        for (var i = -1; ++i < this.items.length; )
            this.items[i].render(t);
        this.selected && this.selected.render(t)
    }
    ;
    var B = 1 - 4 / 3 * (Math.sqrt(2) - 1);
    function z(t) {
        i.Extend.self(this, i.BaseComponent),
        this.type = "close",
        this.cursor = "pointer",
        this.visible = !1,
        this.bounding = null,
        this.x = 0,
        this.y = 0,
        this.scale = 1,
        this.radius = 2,
        this.defaultColor = "#00bcb7",
        this.bg = this.initComponent(o.Path),
        this.line0 = this.initComponent(o.Path),
        this.line1 = this.initComponent(o.Path),
        this.bg.fill = !0,
        this.line0.fill = !0,
        this.line1.fill = !0,
        this.bg.fillColor = this.defaultColor;
        for (var e = {
            x: 0,
            y: 0
        }, s = 0; s < 8; s++)
            this.bg.addPoint(e);
        this.bg.close(!0),
        this.line0.close(!0),
        this.line1.close(!0)
    }
    function P(t) {
        i.Extend.self(this, i.BaseComponent),
        this.type = "selection",
        this.shape = "bounding_box",
        this.key = null,
        this.value = null,
        this.scale = 1,
        this.complete = !1,
        this.drawing = !0,
        this.topRight = null,
        this.path = this.initComponent(o.Path),
        this.close = this.initComponent(z),
        this.bounding = null,
        this.path.close(!0),
        this.onDestroy = this.path.destroy,
        this.path.setPoints([t, t, t, t])
    }
    function M(t) {
        i.Extend.self(this, i.BaseComponent),
        this.type = "selection",
        this.shape = "polygon",
        this.key = null,
        this.value = null,
        this.scale = 1,
        this.drawing = !0,
        this.init = !1,
        this.topRight = null,
        this.complete = !1,
        this.next = null,
        this.path = this.initComponent(o.Path),
        this.close = this.initComponent(z),
        this.bounding = null,
        this.length = null,
        this.onDestroy = this.path.destroy
    }
    function T(t) {
        i.Extend.self(this, i.BaseComponent),
        this.type = "selection",
        this.shape = "point",
        this.key = null,
        this.value = null,
        this.complete = !1,
        this.drawing = !0,
        this.scale = 1,
        this.point = this.initComponent(o.ReticlePoint),
        this.close = this.initComponent(z),
        this.point.x = t.x,
        this.point.y = t.y,
        this.getBounding = this.getBounding.bind(this),
        this.bounding = this.getBounding()
    }
    function I(t) {
        i.Extend.self(this, i.BaseComponent),
        this.type = "selection",
        this.shape = "point",
        this.key = null,
        this.value = null,
        this.complete = !1,
        this.drawing = !0,
        this.scale = 1,
        this.bounding = null,
        this.point = this.initComponent(o.Point),
        this.pin = this.initComponent(v),
        this.text = this.initComponent(w),
        this.close = this.initComponent(z),
        this.defaultColor = "#fff",
        this.hoverColor = "#00bcb7",
        this.point.x = t.x,
        this.point.y = t.y,
        this.defaultCloseColor = "#fff",
        this.hoverCloseColor = "#00bcb7",
        this.point.stroke = !0,
        this.point.fill = !1
    }
    function R(t) {
        i.Extend.self(this, i.BaseComponent),
        this.scale = 1,
        this.shape = t && t.shape_type || "bounding_box",
        this.minSelections = t && t.min_shapes_per_image || 1,
        this.maxSelections = t && t.max_shapes_per_image || 4,
        this.minSize = t && t.minimum_selection_area_per_shape || 5,
        this.minPoints = t && t.min_points || 1,
        this.maxPoints = t && t.max_points || 4,
        this.autoClose = t && t.autoClose || !0
    }
    function S(t) {
        i.Extend.self(this, i.BaseComponent),
        this.scale = 1,
        this.width = 0,
        this.height = 0,
        this.key = null,
        this.config = t || {},
        this.shape = this.config.shape_type || "bounding_box",
        this.update = {
            type: null,
            element: null,
            parent: null
        },
        this.cursor = "default",
        this.userDraw = !0,
        this.area = this.initComponent(m),
        this.selections = this.initComponent(R, this.config),
        this.labels = this.initComponent(E)
    }
    function D() {
        i.Extend.self(this, i.DomComponent, "challenge-view"),
        this.scale = 1,
        this._coords = {
            x: 0,
            y: 0
        },
        this._cursor = "default",
        this._lock = !1,
        this._task = null,
        this.prompt = this.initComponent(r),
        this.example = this.initComponent(l),
        this.canvas = this.initComponent(o.Canvas),
        this.magnify = this.initComponent(u),
        this.description = this.initComponent(y),
        this.canvas.setAttribute("tabindex", "0");
        var t = L.bind(this)
          , e = O.bind(this);
        this.render = this.render.bind(this),
        this.canvas.addEventListener("down", t),
        this.canvas.addEventListener("move", t),
        this.canvas.addEventListener("up", t),
        this.canvas.addEventListener("out", t),
        this.canvas.addEventListener("up", e)
    }
    function O(t) {
        var i = this._task;
        if (i.area["interface"].visible) {
            var e = {
                x: Math.round(t.elementX / this.scale),
                y: Math.round(t.elementY / this.scale)
            };
            i.area.inButtonBounds(e) && (i.area["interface"].toggleMagnify(!i.area["interface"].isMagnifyEnabled),
            this.description.setText(i.area["interface"].isMagnifyEnabled))
        }
    }
    function L(t) {
        if (!this._lock && (t.preventDefault(),
        3 !== t.keyNum)) {
            var i = this._task
              , o = "default"
              , h = {
                x: Math.round(t.elementX / this.scale),
                y: Math.round(t.elementY / this.scale)
            }
              , n = {
                x: h.x,
                y: h.y
            };
            if (i) {
                var a = i.check(h)
                  , l = i.area.inImageBounds(h)
                  , r = i.area.inButtonBounds(h)
                  , p = i.area.inBounds(h)
                  , c = i.area["interface"].isMagnifyEnabled
                  , d = i.area.bounding
                  , u = i.area.image.bounding;
                if ((l || r) && (o = "pointer"),
                "down" === t.action)
                    !a && i.userDraw ? l && (i.create(h),
                    i.isUpdating() && ("point" === i.shape ? this.magnify.display(!i.labels.visible && c, "point") : this.magnify.display(!i.labels.visible && c && !s.System.mobile))) : ("point" === i.shape && (this.magnify.display(!i.labels.visible && c && !i.selections.closeCheck(h), "point"),
                    i.selections.toggleReticle(h)),
                    "path" === a ? l && ("polygon" === i.shape && i.shouldClose(h) ? i.setAnswer() : (i.draw(h, t.action, l),
                    this.magnify.display(!i.labels.visible && "point" !== i.shape && c && !s.System.mobile))) : (i.selectUI(h),
                    i.hoverOn(h),
                    i.isUpdating() && !this.magnify.visible && "handle" === a && (o = "grabbing",
                    this.magnify.display(!i.labels.visible && c, "handle"),
                    n.x = i.update.element.x,
                    n.y = i.update.element.y)));
                else if (!p && i.userDraw || "up" === t.action || "out" === t.action)
                    "point" === i.shape && i.selections.toggleReticle(),
                    a ? !p && s.System.mobile && "path" === a && "move" === t.action ? (h.x = e.MathUtil.clamp(h.x, d.left, d.right),
                    h.y = e.MathUtil.clamp(h.y, d.top, d.bottom),
                    i.draw({
                        x: e.MathUtil.clamp(h.x, u.left, u.right),
                        y: e.MathUtil.clamp(h.y, u.top, u.bottom)
                    }, "move", i.area.inImageBounds(h), !0)) : ("path" === a ? i.draw(h, t.action, l) : i.releaseUI(h),
                    this.magnify.display(i.isUpdating() && c && !s.System.mobile),
                    i.hoverOff(h)) : s.System.mobile || this.magnify.display(!1);
                else if ("move" === t.action)
                    if (a) {
                        if ("path" === a)
                            i.draw({
                                x: e.MathUtil.clamp(h.x, u.left, u.right),
                                y: e.MathUtil.clamp(h.y, u.top, u.bottom)
                            }, "move", l, !0),
                            this.magnify.display(!i.labels.visible && c, "point" === i.shape ? "point" : "handle");
                        else if (i.hoverOn(h),
                        i.isUpdating()) {
                            var y = {
                                x: e.MathUtil.clamp(h.x, u.left, u.right) - e.MathUtil.clamp(this._coords.x, u.left, u.right),
                                y: e.MathUtil.clamp(h.y, u.top, u.bottom) - e.MathUtil.clamp(this._coords.y, u.top, u.bottom)
                            };
                            "handle" === a ? (o = "grabbing",
                            i.moveHandle(y),
                            n.x = i.update.element.x,
                            n.y = i.update.element.y,
                            this.magnify.display(!i.labels.visible && c, "handle")) : "selection" !== a && "label" !== a || ("label" === a && (y = {
                                x: h.x - this._coords.x,
                                y: h.y - this._coords.y
                            }),
                            o = "move",
                            i.moveElement(y),
                            this.magnify.display(!i.labels.visible && c && "point" === i.shape, "point"))
                        }
                    } else
                        i.hoverOff(h);
                this.magnify.move(n)
            }
            this._coords = h,
            o = this.magnify.visible ? "none" : o,
            this._cursor !== o && (this._cursor = o,
            this.canvas.css({
                cursor: o
            }))
        }
    }
    i.Extend.proto(z, i.BaseComponent),
    z.prototype.size = function(t, i) {
        i === undefined && (i = 1);
        var e, s, o, h, n, a, l, r, p = 2 / i, c = 12 / i, d = (e = this.x,
        s = this.y,
        [{
            x: n = e - (o = p) / 2,
            y: l = s - (h = c) / 2
        }, {
            x: a = e + o / 2,
            y: l
        }, {
            x: a,
            y: r = s + h / 2
        }, {
            x: n,
            y: r
        }]);
        this.line0.setPoints(d),
        this.line1.setPoints(d),
        this.line0.rotate(45),
        this.line1.rotate(-45);
        var u, y = this.radius / i, f = t / i / 2, g = function(t, i, e, s, o) {
            for (var h = o * B, n = 0, a = 0, l = [], r = 0; r < 4; r++) {
                var p = {
                    x: 0,
                    y: 0
                }
                  , c = {
                    x: 0,
                    y: 0
                }
                  , d = {
                    x: 0,
                    y: 0
                }
                  , u = {
                    x: 0,
                    y: 0
                }
                  , y = {
                    x: 0,
                    y: 0
                }
                  , f = {
                    x: 0,
                    y: 0
                };
                n = r < 2 ? i : t,
                a = 0 === r || 3 === r ? e : s,
                0 === r ? (p.x = n - o,
                p.y = a,
                c.x = n,
                c.y = a + o,
                d.x = p.x - h,
                d.y = p.y,
                u.x = p.x + h,
                u.y = p.y,
                y.x = c.x,
                y.y = c.y - h,
                f.x = c.x,
                f.y = c.y + h) : 1 === r ? (p.x = n,
                p.y = a - o,
                d.x = p.x,
                d.y = p.y - h,
                u.x = p.x,
                u.y = p.y + h,
                c.x = n - o,
                c.y = a,
                y.x = c.x + h,
                y.y = c.y,
                f.x = c.x - h,
                f.y = c.y) : 2 === r ? (p.x = n + o,
                p.y = a,
                d.x = p.x + h,
                d.y = p.y,
                u.x = p.x - h,
                u.y = p.y,
                c.x = n,
                c.y = a - o,
                y.x = c.x,
                y.y = c.y + h,
                f.x = c.x,
                f.y = c.y - h) : 3 === r && (p.x = n,
                p.y = a + o,
                c.x = n + o,
                c.y = a,
                d.x = p.x,
                d.y = p.y + h,
                u.x = p.x,
                u.y = p.y - h,
                y.x = c.x - h,
                y.y = c.y,
                f.x = c.x + h,
                f.y = c.y),
                l.push({
                    point: p,
                    handleIn: d,
                    handleOut: u
                }),
                l.push({
                    point: c,
                    handleIn: y,
                    handleOut: f
                })
            }
            return l
        }(this.x - f, this.x + f, this.y - f, this.y + f, y);
        this.bg.forEachPoint((function(t) {
            u = g[t.index],
            t.set.apply(t, [u.point, u.handleIn, u.handleOut]),
            t.tolerance = 1 !== i ? 10 : 0
        }
        ), !0),
        this.bounding = this.bg.bounding,
        this.width = t,
        this.height = t,
        this.scale = i
    }
    ,
    z.prototype.display = function(t) {
        this.visible = t
    }
    ,
    z.prototype.place = function(t) {
        var i = t.x - this.x
          , e = t.y - this.y;
        this.x = t.x,
        this.y = t.y,
        this.bg.move(i, e),
        this.line0.move(i, e),
        this.line1.move(i, e),
        this.bounding = this.bg.bounding
    }
    ,
    z.prototype.move = function(t, i) {
        this.x += t,
        this.y += i,
        this.bg.move(t, i),
        this.line0.move(t, i),
        this.line1.move(t, i),
        this.bounding = this.bg.bounding
    }
    ,
    z.prototype.hitTest = function(t) {
        return this.bg.hitTest(t)
    }
    ,
    z.prototype.draw = function(t) {
        this.visible && (this.bg.draw(t),
        this.line0.draw(t),
        this.line1.draw(t))
    }
    ,
    z.prototype.setFill = function(t, i) {
        this.bg.fillColor = t,
        i && (this.line0.fillColor = i,
        this.line1.fillColor = i)
    }
    ,
    i.Extend.proto(P, i.BaseComponent),
    P.prototype.size = function(t) {
        var i = 1 !== t;
        this.close.size(18, t),
        this.path.forEachPoint((function(t) {
            t.radius = 4,
            t.tolerance = i ? 50 : 10,
            t.fillColor = "#fff"
        }
        )),
        this.path.stroke = !0,
        this.path.strokeColor = "rgba(255, 255, 255, 1)",
        this.path.strokeWidth = 2,
        this.path.pointRadius = 4,
        this.scale = t
    }
    ,
    P.prototype.draw = function(t, i, e, s) {
        var o;
        "move" === i && (e || !e && s) && (this.path.forEachPoint((function(i) {
            if (o = {
                x: i.x,
                y: i.y
            },
            1 === i.index || 2 === i.index) {
                var e = t.x - o.x;
                o.x += e
            }
            if (2 === i.index || 3 === i.index) {
                var s = t.y - o.y;
                o.y += s
            }
            i.set(o)
        }
        )),
        this.bounding = this.path.getBounding())
    }
    ,
    P.prototype.move = function(t) {
        this.path.forEachPoint((function(i) {
            i.move(t.x, t.y)
        }
        )),
        this.close && this.close.move(t.x, t.y),
        this.bounding = this.path.getBounding()
    }
    ,
    P.prototype.adjust = function(t, i, e) {
        var s, o = {
            x: t.x + i.x,
            y: t.y + i.y
        }, h = t.next, n = t.prev, a = h.y === t.y ? h.x : n.x, l = h.x === t.x ? h.y : n.y, r = a > t.x, p = l > t.y;
        (r && o.x > a - e || !r && o.x < a + e) && (o.x = t.x),
        (p && o.y > l - e || !p && o.y < l + e) && (o.y = t.y),
        this.path.forEachPoint((function(i) {
            s = {
                x: i.x,
                y: i.y
            },
            t.prev !== i && t.next !== i || (t.x === i.x && (s.x = o.x),
            t.y === i.y && (s.y = o.y)),
            i.set(s)
        }
        )),
        t.set(o),
        this.close.place(this.topRight),
        this.bounding = this.path.getBounding()
    }
    ,
    P.prototype.hover = function(t, i) {
        if (!t)
            return this.close.setFill("#00bcb7"),
            this.path.strokeColor = "#fff",
            this.path.forEachPoint((function(t) {
                t.fillColor = "#fff"
            }
            )),
            !1;
        var e = this.path.hitTest(i)
          , s = this.close.hitTest(i);
        return this.close.setFill(s ? "#118683" : "#00bcb7"),
        this.path.strokeColor = s || e && "segment" === e.type ? "#fff" : "#00bcb7",
        this.path.forEachPoint((function(t) {
            t.fillColor = s || e && ("segment" !== e.type || e.geometry !== t) ? "#fff" : "#00bcb7"
        }
        )),
        !0
    }
    ,
    P.prototype.set = function() {
        var t = !1
          , i = {
            x: this.bounding.right,
            y: this.bounding.top
        };
        return this.path.forEachPoint((function(e) {
            (!1 === t || e.getDistance(i) < t.getDistance(i)) && (t = e)
        }
        )),
        this.topRight = t,
        this.close.place(this.topRight),
        this.close.display(!0),
        this.bounding = this.path.getBounding(),
        this.path.showPoints = !0,
        this.complete = !0,
        this.drawing = !1,
        !1
    }
    ,
    P.prototype.hitTest = function(t) {
        var i = !1
          , e = this.path.hitTest(t);
        (e && (i = {
            element: "path" === e.type ? this : e.geometry,
            type: "path" === e.type ? "selection" : "handle"
        }),
        this.close.visible) && (this.close.hitTest(t) && (i = {
            element: this,
            type: "close"
        }));
        return i
    }
    ,
    P.prototype.getCoords = function() {
        var t = [];
        return this.path.forEachPoint((function(i) {
            t.push(i.x),
            t.push(i.y)
        }
        ), !0),
        t
    }
    ,
    P.prototype.render = function(t) {
        this.path.draw(t),
        this.close.draw(t)
    }
    ,
    P.prototype.onDestroy = function() {
        this.path = this.path.destroy()
    }
    ,
    i.Extend.proto(M, i.BaseComponent),
    M.prototype.size = function(t) {
        var i = 1 !== t;
        if (this.close.size(18, t),
        this.close.visible) {
            var e = {
                x: this.topRight.x + (i ? 35 : 15),
                y: this.topRight.y - (i ? 35 : 15)
            };
            this.close.place(e)
        }
        this.path.forEachPoint((function(t) {
            t.radius = 4,
            t.tolerance = i ? 50 : 10,
            t.fillColor = "#fff"
        }
        )),
        this.path.stroke = !0,
        this.path.strokeColor = "rgba(255, 255, 255, 1)",
        this.path.strokeWidth = 2,
        this.path.showPoints = !0,
        this.scale = t
    }
    ,
    M.prototype.draw = function(t, i, e) {
        var s = 1 !== this.scale;
        if (this.next && this.next.set(t),
        "up" === i && e) {
            var h = t;
            if (this.init)
                h = {
                    x: this.next.x,
                    y: this.next.y
                },
                this.path.addPoint(this.next);
            else {
                this.init = !0;
                var n = this.path.addPoint(t);
                this.next = new o.Segment(t),
                n.radius = 4,
                n.tolerance = s ? 50 : 10,
                n.fillColor = "#fff"
            }
            this.next = new o.Segment(h),
            this.next.radius = 4,
            this.next.tolerance = s ? 50 : 10,
            this.next.fillColor = "#fff",
            this.length = this.path.getLength()
        }
        this.bounding = this.path.getBounding()
    }
    ,
    M.prototype.move = function(t) {
        this.path.move(t.x, t.y),
        this.close.visible && this.close.move(t.x, t.y),
        this.bounding = this.path.getBounding()
    }
    ,
    M.prototype.adjust = function(t, i) {
        if (t.set({
            x: t.x + i.x,
            y: t.y + i.y
        }),
        this.bounding = this.path.getBounding(),
        this.close.visible) {
            var e = {
                x: this.topRight.x + 12 / this.scale,
                y: this.topRight.y - 12 / this.scale
            };
            this.close.place(e)
        }
    }
    ,
    M.prototype.set = function() {
        var t = 1 !== this.scale;
        this.bounding = this.path.getBounding(),
        this.length = this.path.getLength(),
        this.path.close(!0);
        var i = !1
          , e = {
            x: this.bounding.right,
            y: this.bounding.top
        };
        this.path.forEachPoint((function(t) {
            (!1 === i || t.getDistance(e) < i.getDistance(e)) && (i = t)
        }
        )),
        this.topRight = i;
        var s = {
            x: this.topRight.x + (t ? 20 : 15),
            y: this.topRight.y - (t ? 20 : 15)
        };
        return this.close.display(!0),
        this.close.place(s),
        this.complete = !0,
        this.drawing = !1,
        !1
    }
    ,
    M.prototype.hitTest = function(t) {
        var i = !1
          , e = this.path.hitTest(t);
        (e && (i = {
            element: "path" === e.type ? this : e.geometry,
            type: "path" === e.type ? "selection" : "handle"
        }),
        this.close.visible) && (this.close.hitTest(t) && (i = {
            element: this,
            type: "close"
        }));
        return i
    }
    ,
    M.prototype.getCoords = function() {
        var t = [];
        return this.path.forEachPoint((function(i) {
            t.push(i.x),
            t.push(i.y)
        }
        ), !0),
        t
    }
    ,
    M.prototype.render = function(t) {
        this.path.draw(t),
        this.close.draw(t)
    }
    ,
    M.prototype.hover = function(t, i) {
        if (!t)
            return this.close.setFill("#00bcb7"),
            this.path.strokeColor = "#fff",
            this.path.forEachPoint((function(t) {
                t.fillColor = "#fff"
            }
            )),
            !1;
        var e = this.path.hitTest(i)
          , s = this.close.hitTest(i);
        return this.close.setFill(s ? "#118683" : "#00bcb7"),
        this.path.strokeColor = s || e && "segment" === e.type ? "#fff" : "#00bcb7",
        this.path.forEachPoint((function(t) {
            t.fillColor = s || e && ("segment" !== e.type || e.geometry !== t) ? "#fff" : "#00bcb7"
        }
        )),
        !0
    }
    ,
    i.Extend.proto(T, i.BaseComponent),
    T.prototype.size = function(t) {
        var i = 1 !== t;
        if (this.close.size(18, t),
        this.close.setFill(n.Color.white, n.Color.grey.selected),
        this.close.visible) {
            var e = {
                x: this.point.x + 21 / this.scale,
                y: this.point.y - 21 / this.scale
            };
            this.close.place(e)
        }
        this.point.fill = !0,
        this.point.strokeColor = "rgba(255, 255, 255, 1)",
        this.point.radius = 5,
        this.point.tolerance = i ? 20 : 10,
        this.scale = t
    }
    ,
    T.prototype.draw = function(t, i, e) {
        "move" === i && (this.point.x = t.x,
        this.point.y = t.y,
        this.bounding = this.getBounding())
    }
    ,
    T.prototype.move = function(t) {
        this.point.x += t.x,
        this.point.y += t.y,
        this.bounding = this.getBounding(),
        this.close.move(t.x, t.y)
    }
    ,
    T.prototype.set = function() {
        var t = {
            x: this.point.x + 21 / this.scale,
            y: this.point.y - 21 / this.scale
        };
        return this.point.fill = !0,
        this.point.stroke = !1,
        this.close.place(t),
        this.close.display(!0),
        this.bounding = this.getBounding(),
        this.complete = !0,
        this.drawing = !1,
        !0
    }
    ,
    T.prototype.hitTest = function(t) {
        var i = !1;
        return this.point.hitTest(t) && (i = {
            element: this,
            type: "selection"
        }),
        this.close.hitTest(t) && (i = {
            element: this,
            type: "close"
        }),
        i
    }
    ,
    T.prototype.getCoords = function() {
        return [this.point.x, this.point.y]
    }
    ,
    T.prototype.getBounding = function() {
        return {
            left: this.point.x - this.point.radius,
            right: this.point.x + this.point.radius,
            top: this.point.y - this.point.radius,
            bottom: this.point.y + this.point.radius
        }
    }
    ,
    T.prototype.render = function(t) {
        this.point.draw(t),
        this.close.draw(t)
    }
    ,
    T.prototype.hover = function(t, i) {
        if (!t)
            return this.close.display(1 !== this.scale && this.point.complete),
            this.close.setFill(n.Color.white, n.Color.grey.selected),
            this.point.hovered = !1,
            !1;
        var e = this.close.hitTest(i);
        return e ? this.close.setFill(n.Color.grey.selected, n.Color.white) : this.close.setFill(n.Color.white, n.Color.grey.selected),
        this.close.display(e || 1 === this.scale),
        this.point.hovered = !0,
        this.point.fillColor = n.Color.white,
        !0
    }
    ,
    i.Extend.proto(I, i.BaseComponent),
    I.prototype.place = function(t) {
        this.point.x = t.x,
        this.point.y = t.y,
        this.pin.place(t.x, t.y - this.bounding.bottom);
        var i = this.pin.bounding
          , e = i.top + 17 / this.scale
          , s = 15 / this.scale;
        this.close.place({
            x: i.left + s,
            y: e
        }),
        this.text.place({
            x: i.left + s + this.close.width + s,
            y: e
        }),
        this.bounding = i
    }
    ,
    I.prototype.size = function(t) {
        this.pin.size(80, 35, t);
        var i = this.pin.bounding
          , e = i.top + 17 / t
          , s = 15 / t;
        this.close.size(18, t),
        this.close.place({
            x: i.left + s,
            y: e
        }),
        this.text.scale = t,
        this.text.size = 14,
        this.text.weight = 600,
        this.text.place({
            x: i.left + s + this.close.width + s,
            y: e
        }),
        this.point.radius = 5,
        this.point.strokeWidth = 2,
        this.scale = t,
        this.width = 80,
        this.height = 35,
        this.bounding = i
    }
    ,
    I.prototype.draw = function(t, i, e) {
        "move" === i && e && (this.point.x = t.x,
        this.point.y = t.y,
        this.bounding = this.pin.bounding)
    }
    ,
    I.prototype.move = function(t) {
        this.point.x = this.point.x + t.x,
        this.point.y = this.point.y + t.y,
        this.bounding = this.pin.bounding,
        this.pin.move(t.x, t.y),
        this.text.move(t.x, t.y),
        this.close.move(t.x, t.y)
    }
    ,
    I.prototype.set = function() {
        return this.close.display(!0),
        this.text.display(!0),
        this.bounding = this.pin.bounding,
        this.complete = !0,
        this.drawing = !1,
        !0
    }
    ,
    I.prototype.applyLabel = function(t) {
        this.key = t.key,
        this.value = t.value,
        this.text.set(t.value)
    }
    ,
    I.prototype.applyColor = function(t) {
        this.color = t,
        this.hoverColor = t.clone().lightness(.35).getHex(),
        this.defaultColor = t.getHex(),
        this.defaultCloseColor = t.clone().lightness(.35).getHex(),
        this.hoverCloseColor = t.clone().lightness(.7).getHex(),
        this.pin.setFill(this.defaultColor),
        this.close.setFill(this.defaultCloseColor),
        this.point.strokeColor = t.clone().saturation(.6).lightness(.9).getHex()
    }
    ,
    I.prototype.hitTest = function(t) {
        var i = !1
          , e = this.point.hitTest(t)
          , s = this.pin.hitTest(t);
        ((e || s) && (i = {
            element: this,
            type: "selection"
        }),
        this.close.visible) && (this.close.hitTest(t) && (i = {
            element: this,
            type: "close"
        }));
        return i
    }
    ,
    I.prototype.getCoords = function() {
        return [this.point.x, this.point.y]
    }
    ,
    I.prototype.render = function(t) {
        this.point.draw(t),
        this.pin.draw(t),
        this.close.draw(t),
        this.text.draw(t)
    }
    ,
    I.prototype.hover = function(t, i) {
        if (!1 === t)
            return this.close.setFill(this.defaultCloseColor),
            this.pin.setFill(this.defaultColor),
            !1;
        var e = this.close.hitTest(i);
        return this.close.setFill(e ? this.hoverCloseColor : this.defaultCloseColor),
        this.pin.setFill(e ? this.defaultColor : this.hoverColor),
        !0
    }
    ,
    I.prototype.minimize = function(t) {
        this._minimized = t,
        this.offset = t ? 0 : this.close.width + (this.mobile ? 10 : 0),
        this.pin.opacity = t ? .8 : 1,
        this.close.display(!t),
        this.text.display(!t),
        this.pin.minimize(t)
    }
    ,
    i.Extend.proto(R, i.BaseComponent),
    R.prototype.size = function(t, i) {
        for (var e = this.children.length; --e > -1; )
            this.children[e].size && this.children[e].size(i);
        this.scale = i
    }
    ,
    R.prototype.create = function(t, i) {
        if (this.children.length < this.maxSelections) {
            var e = P;
            "polygon" === t && (e = M),
            "point" === t && (e = T),
            "pin" === t && (e = I);
            var s = this.initComponent(e, i);
            return s.size(this.scale),
            s
        }
        return null
    }
    ,
    R.prototype.isComplete = function(t) {
        return "bounding_box" === t.shape || "point" === t.shape || ("polygon" === t.shape ? t.drawing && t.length === this.maxPoints && this.autoClose : void 0)
    }
    ,
    R.prototype.set = function(t) {
        var i = !1;
        if (t.bounding) {
            if ("bounding_box" === t.shape || "polygon" === t.shape) {
                var e = Math.abs(t.bounding.left - t.bounding.right)
                  , s = Math.abs(t.bounding.top - t.bounding.bottom);
                if (!(i = e > this.minSize && s > this.minSize))
                    return this.remove.call(this, t),
                    !0
            } else
                "point" === t.shape && (i = !0);
            return !!i && (t.set(),
            !0)
        }
    }
    ,
    R.prototype.check = function(t) {
        for (var i = this.children.length, e = !1; --i > -1 && !e; )
            (e = this.children[i].hitTest(t)) && (e.selection = this.children[i]);
        return e
    }
    ,
    R.prototype.remove = function(t) {
        for (var i = this.children.length; --i > -1; )
            this.children[i] === t && this.children.splice(i, 1);
        t.destroy && t.destroy(),
        t = null
    }
    ,
    R.prototype.minimize = function(t, i) {
        for (var e = this.children.length; --e > -1; )
            this.children[e] !== i && this.children[e].minimize && this.children[e].minimize(t)
    }
    ,
    R.prototype.getLength = function() {
        return this.children.length
    }
    ,
    R.prototype.render = function(t) {
        for (var i = -1; ++i < this.children.length; )
            this.children[i].render(t)
    }
    ,
    R.prototype.hover = function(t, i) {
        for (var e = this.children.length, s = !1; --e > -1; )
            !1 === t ? this.children[e].hover(!1) : this.children[e].hitTest(i) && !s ? s = this.children[e].hover(t, i) : this.children[e].hover(!1);
        return s
    }
    ,
    R.prototype.toggleReticle = function(t) {
        for (var i = 0; i < this.children.length; )
            this.children[i].point.complete = !t || !this.children[i].point.hitTest(t),
            i++
    }
    ,
    R.prototype.closeCheck = function(t) {
        for (var i = this.children.length, e = !1; --i > -1 && !e; )
            e = this.children[i].close.hitTest(t);
        return e
    }
    ,
    i.Extend.proto(S, i.BaseComponent),
    S.prototype.setAnswer = function() {
        if (this.update.element) {
            var t = this.update.element;
            this.selections.set(t) && (this.update.type = null,
            this.update.element = null,
            this.update.parent = null,
            this.emit("update"))
        }
    }
    ,
    S.prototype.display = function(t) {
        this.visible = t,
        this.area.display(t),
        this.labels.active && this.labels.display(t),
        this.area["interface"].display(!this.labels.active)
    }
    ,
    S.prototype.load = function(t) {
        var i = this
          , e = t.task.datapoint_uri
          , s = t.answers;
        this.display.call(this, !1);
        var o = [this.area.load(e)]
          , h = [];
        for (var n in s)
            h.push({
                key: n,
                value: s[n]
            });
        return h.length > 1 && h.length <= 7 && "point" === this.shape && (o.push(this.labels.load(h)),
        this.selections.on("remove", this.labels.replenish.bind(this.labels)),
        this.userDraw = !1),
        this.key = t.task.task_key,
        this.options = h,
        Promise.all(o).then((function() {
            i.display.call(i, !0)
        }
        ))
    }
    ,
    S.prototype.size = function(t, i) {
        var e = this.labels.active ? 350 : 350 + this.area["interface"].height;
        this.area.size(500, e, t, i),
        this.selections.size(t, i),
        this.labels.active && this.labels.size(500, e, t, i),
        this.width = 500,
        this.height = this.labels.active ? e + this.labels.height : e,
        this.scale = i
    }
    ,
    S.prototype.check = function(t) {
        if (this.update.element)
            return this.update.type;
        if (this.labels.visible && this.labels.inBounds(t))
            return !!this.labels.check(t) && "label";
        var i = this.selections.check(t);
        return !!i && ("selection" !== i.type || i.element.complete ? i.type : "path")
    }
    ,
    S.prototype.create = function(t) {
        var i = this.selections.create(this.shape, t);
        this.update = {
            type: "path",
            element: i,
            parent: null
        }
    }
    ,
    S.prototype.isUpdating = function() {
        return null !== this.update.element
    }
    ,
    S.prototype.isDrawn = function() {
        return null !== this.update.element && this.update.element.complete
    }
    ,
    S.prototype.draw = function(t, i, e, s) {
        var o = this.update.element;
        o.draw(t, i, e, s),
        "up" !== i && "out" !== i || this.selections.isComplete(o) && this.setAnswer()
    }
    ,
    S.prototype.selectUI = function(t) {
        if (this.labels.visible && this.labels.inBounds(t)) {
            var i = this.labels.check(t);
            if (i) {
                var e = this.labels.select(i.tag);
                e && (this.update = {
                    type: "label",
                    element: e,
                    parent: null
                },
                this.labels.use(i.tag),
                this.labels.hover(t, "out"),
                this.selections.minimize(!0))
            }
        } else {
            var s = this.selections.check(t);
            s && (this.update = {
                type: s.type,
                element: s.element,
                parent: s.selection
            })
        }
    }
    ,
    S.prototype.releaseUI = function(t) {
        var i = this.update.element
          , e = this.update.parent;
        if ("close" === this.update.type && (this.labels.visible && (this.labels.replenish(e),
        this.selections.minimize(!1)),
        this.selections.remove(this.update.parent),
        this.emit("update")),
        "label" === this.update.type) {
            var s = this.area.inBounds({
                x: i.x,
                y: i.y
            }) ? this.selections.create("pin", {
                x: i.x,
                y: i.bounding.bottom
            }) : null;
            s ? (s.applyColor(i.color),
            s.applyLabel({
                key: i.key,
                value: i.value
            }),
            s.place(s.point),
            this.selections.set(s),
            this.emit("update")) : this.labels.replenish(i),
            this.selections.minimize(!1)
        }
        this.update.type = null,
        this.update.element = null,
        this.update.parent = null,
        this.cursor = "default"
    }
    ,
    S.prototype.moveHandle = function(t) {
        var i = this.update.element
          , e = this.update.parent
          , s = this.area.getBounding();
        t.x + i.x > s.right ? t.x = s.right - i.x : t.x + i.x < s.left && (t.x = s.left - i.x),
        t.y + i.y > s.bottom ? t.y = s.bottom - i.y : t.x + i.y < s.top && (t.y = s.top - i.yp),
        e.adjust(i, t, this.selections.minSize)
    }
    ,
    S.prototype.moveElement = function(t) {
        var i = this.update.element;
        if ("selection" === this.update.type) {
            var e = i.bounding
              , s = this.area.getBounding();
            t.x + e.right > s.right ? t.x = s.right - e.right : t.x + e.left < s.left && (t.x = s.left - e.left),
            t.y + e.bottom > s.bottom ? t.y = s.bottom - e.bottom : t.y + e.top < s.top && (t.y = s.top - e.top)
        }
        i.move(t),
        this.cursor = "grabbing"
    }
    ,
    S.prototype.hoverOn = function(t) {
        var i = null;
        if (this.labels.visible && this.labels.inBounds(t))
            return i = this.labels.check(t),
            this.labels.hover(t, i ? "over" : "out"),
            this.cursor = "pointer",
            !0;
        if (!this.area.inBounds(t))
            return this.selections.hover(!1),
            this.cursor = "default",
            !1;
        var e = this.selections.hover("selection" !== this.update.type || s.System.mobile, t);
        return this.cursor = e ? "pointer" : "default",
        "pointer" === this.cursor
    }
    ,
    S.prototype.hoverOff = function(t) {
        this.labels.visible && this.labels.hover(t, "out"),
        this.selections.hover(!1)
    }
    ,
    S.prototype.shouldClose = function(t) {
        var i = this.update.element.hitTest(t);
        return !(!i || "handle" !== i.type || 0 !== i.element.index)
    }
    ,
    S.prototype.getTaskImage = function(t) {
        return this.area.image
    }
    ,
    S.prototype.prerender = function(t) {
        this.area.render(t)
    }
    ,
    S.prototype.render = function(t) {
        this.area.render(t),
        this.selections.render(t),
        this.labels.visible && this.labels.render(t),
        this.selection && this.selection.render(t),
        "label" !== this.update.type || this.update.element.complete || this.update.element.render(t)
    }
    ,
    S.prototype.getAnswers = function() {
        for (var t = [], i = this.selections.children, e = this.area.getBounding(), s = this.area.image.scale, o = 0; o < i.length; o++) {
            for (var h = i[o].getCoords(), n = o, a = 0; a < h.length; a += 2)
                h[a] = Math.round((h[a] - e.left) / s),
                h[a + 1] = Math.round((h[a + 1] - e.top) / s);
            t.push({
                entity_name: n,
                entity_type: i[o].key || this.options[0].key,
                entity_coords: h
            })
        }
        return t
    }
    ,
    i.Extend.proto(D, i.DomComponent),
    D.prototype.lock = function(t) {
        this._lock = t
    }
    ,
    D.prototype.display = function(t) {
        this.prompt.display(t),
        this.example.display(t)
    }
    ,
    D.prototype.focus = function() {
        this.canvas.focus()
    }
    ,
    D.prototype.style = function(t, i) {
        var e = 0
          , o = i ? .56 : 1;
        this.prompt.style(t, i),
        e += this.prompt.height + 10,
        this.example.style(t, i),
        this.example.css({
            top: this.prompt.height + 10
        }),
        e += this.example.height + 10,
        this.top = e / o,
        this._task.size(this.top, o, i),
        this.canvas.css({
            position: "absolute",
            top: 0,
            cursor: this._cursor,
            zIndex: 10
        }),
        e += this._task.height * o,
        this.canvas.dpr = s.System.mobile && this.canvas.dpr > 1 ? Math.round(this.canvas.dpr) : 2,
        this.canvas.scale = o,
        this.canvas.dimensions(t, e);
        var h = i ? 150 : 75;
        this.magnify.size(h, this.canvas);
        var n = !this._task.labels.active && s.System.mobile;
        this.description.display(n),
        n && (this.description.style(t),
        this.description.css({
            position: "absolute",
            top: e + 10
        }),
        e += this.description.height + 10),
        this.css({
            width: t,
            height: e,
            borderRadius: 4,
            overflow: "hidden"
        }),
        this.width = t,
        this.height = e,
        this.scale = o,
        this.mobile = i
    }
    ,
    D.prototype.getImageData = function() {
        this.canvas.clear(),
        this.canvas.draw(),
        this._task.prerender(this.canvas);
        var t = this.canvas.ctx.getImageData(0, 0, this.canvas.element.width, this.canvas.element.height).data;
        this.magnify.setPixelData(this._task.getTaskImage(), t)
    }
    ,
    D.prototype.render = function() {
        this.canvas.ctx && (this.canvas.clear(),
        this._task && this._task.render(this.canvas),
        this.magnify.render(this.canvas))
    }
    ,
    D.prototype.clear = function() {
        this._task && (this._task = this._task.destroy())
    }
    ,
    D.prototype.isEmpty = function() {
        return 0 === this._task.selections.getLength()
    }
    ,
    D.prototype.createTask = function(t, i, e, s) {
        var o = this
          , h = [];
        return this._task ? this._task = this._task.destroy() : (this.prompt.setLocaleDict(t),
        this.translate(),
        i && h.push(this.example.load(i)),
        this.prompt.style(this.width, this.mobile),
        this.example.style(this.width, this.mobile)),
        this._task = this.initComponent(S, s),
        this._task.size(this.top, this.scale, this.mobile),
        this._task.on("update", (function(t) {
            o.emit("update", !o.isEmpty())
        }
        )),
        h.push(o._task.load(e)),
        Promise.all(h).then((function() {
            o.getImageData.call(o),
            o.style.call(o, o.width, o.mobile)
        }
        ))
    }
    ,
    D.prototype.getResults = function() {
        var t = this._task.getAnswers();
        return {
            key: this._task.key,
            answers: t
        }
    }
    ,
    D.prototype.translate = function() {
        this._task ? this.description.setText(this._task.area["interface"].isMagnifyEnabled) : this.description.setText(),
        this.prompt.setText()
    }
    ;
    function U() {
        i.Extend.self(this, i.DomComponent, "challenge"),
        this.type = "image_label_area_select",
        this.resolve = null,
        this.reject = null,
        this.breadcrumbs = 0,
        this.served = 0,
        this.mobile = !1,
        this._data = null,
        this._answers = Object.create(null),
        this._total = 0,
        this.syncCheckState = this.syncCheckState.bind(this),
        this.view = this.initComponent(D),
        this.view.on("update", this.syncCheckState),
        e.Render.add(this.view.render)
    }
    return i.Extend.proto(U, i.DomComponent),
    U.prototype.style = function(t, i) {
        var e = this;
        this.mobile = t <= 720;
        var s = this.mobile ? 280 : 500;
        return new Promise((function(t, i) {
            e.view.style(s, e.mobile),
            e.css({
                width: s,
                height: e.view.height
            }),
            t({
                width: s,
                height: e.view.height,
                mobile: e.mobile
            })
        }
        ))
    }
    ,
    U.prototype.setup = function(i) {
        var s = this
          , o = this.view;
        return this._data = i,
        this._total = i.tasklist.length,
        this._answers = Object.create(null),
        this.served = 0,
        this.breadcrumbs = this._total,
        this.view.clear(),
        this.view.lock(!0),
        this.view.display(!1),
        this.emit("display-check", !1),
        new Promise((function(h, n) {
            if (i.tasklist && 0 !== i.tasklist.length) {
                var a = {
                    task: i.tasklist[0],
                    answers: i.requester_restricted_answer_set
                };
                o.createTask(i.requester_question, i.requester_question_example, a, i.request_config).then((function() {
                    s.served += 1,
                    e.Render.start(s.view.render),
                    s.view.lock(!1),
                    s.view.display(!0),
                    s.syncCheckState()
                }
                ))["catch"]((function(i) {
                    n({
                        event: t.CaptchaError.CHALLENGE_ERROR,
                        message: "Failed to setup task: " + s.served + " / " + s._total,
                        reason: i
                    })
                }
                ))
            } else
                n({
                    event: t.CaptchaError.CHALLENGE_ERROR,
                    message: "Missing tasklist"
                });
            s.resolve = h,
            s.reject = n
        }
        ))
    }
    ,
    U.prototype.setFocus = function() {
        this.view.focus()
    }
    ,
    U.prototype.syncCheckState = function() {
        var t = function(t, i) {
            if (!t || t.tasklist && 0 === t.tasklist.length)
                return !1;
            for (var e = 0; e < t.tasklist.length; e++) {
                var s = i[t.tasklist[e].task_key];
                if (s && s.length > 0)
                    return !0
            }
            return !1
        }(this._data, this._answers)
          , i = !this.view.isEmpty();
        this.emit("display-check", i || t)
    }
    ,
    U.prototype.submit = function() {
        var i = this
          , s = this._data
          , o = this.view.getResults()
          , h = this.served === this._total;
        if (this._answers[o.key] = o.answers,
        this.view.lock(!0),
        h) {
            var n;
            e.Render.stop(this.view.render);
            for (var a = !1, l = 0; l < s.tasklist.length; l++)
                if (n = s.tasklist[l].task_key,
                !this._answers[n]) {
                    a = !0;
                    break
                }
            !this._answers || a ? this.reject({
                event: t.CaptchaError.CHALLENGE_ERROR,
                message: "Answers are incomplete"
            }) : this.resolve(this._answers)
        } else {
            var r = {
                task: s.tasklist[this.served],
                answers: s.requester_restricted_answer_set
            };
            this.view.createTask(s.requester_question, s.requester_question_example, r, s.request_config).then((function() {
                i.served += 1,
                i.view.lock(!1),
                i.syncCheckState()
            }
            ))["catch"]((function(e) {
                i.reject({
                    event: t.CaptchaError.CHALLENGE_ERROR,
                    message: "Failed to setup task: " + i.served + " / " + i._total,
                    reason: e
                })
            }
            ))
        }
    }
    ,
    U.prototype.translate = function() {
        this.view.translate()
    }
    ,
    U.prototype.onDestroy = function() {
        e.Render.stop(this.view.render)
    }
    ,
    U
}(_sharedLibs.packages.constants, _sharedLibs.packages.core, _sharedLibs.packages.utils, _sharedLibs.packages.device, _sharedLibs.packages.canvas, _sharedLibs.packages.language, _sharedLibs.packages.config);
