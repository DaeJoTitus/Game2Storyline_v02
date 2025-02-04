const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Cnds.CompareBoolVar
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Solid: 0},
	{Tilemap: 0},
	{isLeft: 0},
	{attack: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{BoundToLayout: 0},
	{Player: 0},
	{Keyboard: 0},
	{state: 0},
	{Light: 0},
	{Arm: 0},
	{arm2: 0},
	{Sprite: 0},
	{lightOn: 0},
	{playerAttack: 0},
	{GameID: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Tilemap: class extends self.ITilemapInstance {},
	Player: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Light: class extends self.ISpriteInstance {},
	Arm: class extends self.ISpriteInstance {},
	arm2: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {}
}