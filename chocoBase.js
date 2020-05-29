//HAVE FUN IN USING SHIT EVERYONE
//packets
var C00Handshake = Java.type("net.minecraft.network.handshake.client.C00Handshake");
var C00PacketKeepAlive = Java.type("net.minecraft.network.play.client.C00PacketKeepAlive");
var C00PacketLoginStart = Java.type("net.minecraft.network.login.client.C00PacketLoginStart");
var C00PacketServerQuery = Java.type("net.minecraft.network.status.client.C00PacketServerQuery");
var C01PacketChatMessage = Java.type("net.minecraft.network.play.client.C01PacketChatMessage");
var C01PacketEncryptionResponse = Java.type("net.minecraft.network.login.client.C01PacketEncryptionResponse");
var C01PacketPing = Java.type("net.minecraft.network.status.client.C01PacketPing");
var C02PacketUseEntity = Java.type("net.minecraft.network.play.client.C02PacketUseEntity");
var C03PacketPlayer = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
var C04PacketPlayerPosition = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition");
var C05PacketPlayerLook = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook");
var C06PacketPlayerPosLook = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook");
var C07PacketPlayerDigging = Java.type("net.minecraft.network.play.client.C07PacketPlayerDigging");
var C08PacketPlayerBlockPlacement = Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement");
var C09PacketHeldItemChange = Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange");
var C0APacketAnimation = Java.type("net.minecraft.network.play.client.C0APacketAnimation");
var C0BPacketEntityAction = Java.type("net.minecraft.network.play.client.C0BPacketEntityAction");
var C0CPacketInput = Java.type("net.minecraft.network.play.client.C0CPacketInput");
var C0DPacketCloseWindow = Java.type("net.minecraft.network.play.client.C0DPacketCloseWindow");
var C0EPacketClickWindow = Java.type("net.minecraft.network.play.client.C0EPacketClickWindow");
var C0FPacketConfirmTransaction = Java.type("net.minecraft.network.play.client.C0FPacketConfirmTransaction");
var C10PacketCreativeInventoryAction = Java.type("net.minecraft.network.play.client.C10PacketCreativeInventoryAction");
var C11PacketEnchantItem = Java.type("net.minecraft.network.play.client.C11PacketEnchantItem");
var C12PacketUpdateSign = Java.type("net.minecraft.network.play.client.C12PacketUpdateSign");
var C13PacketPlayerAbilities = Java.type("net.minecraft.network.play.client.C13PacketPlayerAbilities");
var C14PacketTabComplete = Java.type("net.minecraft.network.play.client.C14PacketTabComplete");
var C15PacketClientSettings = Java.type("net.minecraft.network.play.client.C15PacketClientSettings");
var C16PacketClientStatus = Java.type("net.minecraft.network.play.client.C16PacketClientStatus");
var C17PacketCustomPayload = Java.type("net.minecraft.network.play.client.C17PacketCustomPayload");
var C18PacketSpectate = Java.type("net.minecraft.network.play.client.C18PacketSpectate");
var C19PacketResourcePackStatus = Java.type("net.minecraft.network.play.client.C19PacketResourcePackStatus");
var S00PacketDisconnect = Java.type("net.minecraft.network.login.server.S00PacketDisconnect");
var S00PacketKeepAlive = Java.type("net.minecraft.network.play.server.S00PacketKeepAlive");
var S00PacketServerInfo = Java.type("net.minecraft.network.status.server.S00PacketServerInfo");
var S01PacketEncryptionRequest = Java.type("net.minecraft.network.login.server.S01PacketEncryptionRequest");
var S01PacketJoinGame = Java.type("net.minecraft.network.play.server.S01PacketJoinGame");
var S01PacketPong = Java.type("net.minecraft.network.status.server.S01PacketPong");
var S02PacketChat = Java.type("net.minecraft.network.play.server.S02PacketChat");
var S02PacketLoginSuccess = Java.type("net.minecraft.network.login.server.S02PacketLoginSuccess");
var S03PacketEnableCompression = Java.type("net.minecraft.network.login.server.S03PacketEnableCompression");
var S03PacketTimeUpdate = Java.type("net.minecraft.network.play.server.S03PacketTimeUpdate");
var S04PacketEntityEquipment = Java.type("net.minecraft.network.play.server.S04PacketEntityEquipment");
var S05PacketSpawnPosition = Java.type("net.minecraft.network.play.server.S05PacketSpawnPosition");
var S06PacketUpdateHealth = Java.type("net.minecraft.network.play.server.S06PacketUpdateHealth");
var S07PacketRespawn = Java.type("net.minecraft.network.play.server.S07PacketRespawn");
var S08PacketPlayerPosLook = Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook");
var S09PacketHeldItemChange = Java.type("net.minecraft.network.play.server.S09PacketHeldItemChange");
var S0APacketUseBed = Java.type("net.minecraft.network.play.server.S0APacketUseBed");
var S0BPacketAnimation = Java.type("net.minecraft.network.play.server.S0BPacketAnimation");
var S0CPacketSpawnPlayer = Java.type("net.minecraft.network.play.server.S0CPacketSpawnPlayer");
var S0DPacketCollectItem = Java.type("net.minecraft.network.play.server.S0DPacketCollectItem");
var S0EPacketSpawnObject = Java.type("net.minecraft.network.play.server.S0EPacketSpawnObject");
var S0FPacketSpawnMob = Java.type("net.minecraft.network.play.server.S0FPacketSpawnMob");
var S10PacketSpawnPainting = Java.type("net.minecraft.network.play.server.S10PacketSpawnPainting");
var S11PacketSpawnExperienceOrb = Java.type("net.minecraft.network.play.server.S11PacketSpawnExperienceOrb");
var S12PacketEntityVelocity = Java.type("net.minecraft.network.play.server.S12PacketEntityVelocity");
var S13PacketDestroyEntities = Java.type("net.minecraft.network.play.server.S13PacketDestroyEntities");
var S14PacketEntity = Java.type("net.minecraft.network.play.server.S14PacketEntity");
var S15PacketEntityRelMove = Java.type("net.minecraft.network.play.server.S14PacketEntity.S15PacketEntityRelMove");
var S16PacketEntityLook = Java.type("net.minecraft.network.play.server.S14PacketEntity.S16PacketEntityLook");
var S17PacketEntityLookMove = Java.type("net.minecraft.network.play.server.S14PacketEntity.S17PacketEntityLookMove");
var S18PacketEntityTeleport = Java.type("net.minecraft.network.play.server.S18PacketEntityTeleport");
var S19PacketEntityHeadLook = Java.type("net.minecraft.network.play.server.S19PacketEntityHeadLook");
var S19PacketEntityStatus = Java.type("net.minecraft.network.play.server.S19PacketEntityStatus");
var S1BPacketEntityAttach = Java.type("net.minecraft.network.play.server.S1BPacketEntityAttach");
var S1CPacketEntityMetadata = Java.type("net.minecraft.network.play.server.S1CPacketEntityMetadata");
var S1DPacketEntityEffect = Java.type("net.minecraft.network.play.server.S1DPacketEntityEffect");
var S1EPacketRemoveEntityEffect = Java.type("net.minecraft.network.play.server.S1EPacketRemoveEntityEffect");
var S1FPacketSetExperience = Java.type("net.minecraft.network.play.server.S1FPacketSetExperience");
var S20PacketEntityProperties = Java.type("net.minecraft.network.play.server.S20PacketEntityProperties");
var S21PacketChunkData = Java.type("net.minecraft.network.play.server.S21PacketChunkData");
var S22PacketMultiBlockChange = Java.type("net.minecraft.network.play.server.S22PacketMultiBlockChange");
var S23PacketBlockChange = Java.type("net.minecraft.network.play.server.S23PacketBlockChange");
var S24PacketBlockAction = Java.type("net.minecraft.network.play.server.S24PacketBlockAction");
var S25PacketBlockBreakAnim = Java.type("net.minecraft.network.play.server.S25PacketBlockBreakAnim");
var S26PacketMapChunkBulk = Java.type("net.minecraft.network.play.server.S26PacketMapChunkBulk");
var S27PacketExplosion = Java.type("net.minecraft.network.play.server.S27PacketExplosion");
var S28PacketEffect = Java.type("net.minecraft.network.play.server.S28PacketEffect");
var S29PacketSoundEffect = Java.type("net.minecraft.network.play.server.S29PacketSoundEffect");
var S2APacketParticles = Java.type("net.minecraft.network.play.server.S2APacketParticles");
var S2BPacketChangeGameState = Java.type("net.minecraft.network.play.server.S2BPacketChangeGameState");
var S2CPacketSpawnGlobalEntity = Java.type("net.minecraft.network.play.server.S2CPacketSpawnGlobalEntity");
var S2DPacketOpenWindow = Java.type("net.minecraft.network.play.server.S2DPacketOpenWindow");
var S2EPacketCloseWindow = Java.type("net.minecraft.network.play.server.S2EPacketCloseWindow");
var S2FPacketSetSlot = Java.type("net.minecraft.network.play.server.S2FPacketSetSlot");
var S30PacketWindowItems = Java.type("net.minecraft.network.play.server.S30PacketWindowItems");
var S31PacketWindowProperty = Java.type("net.minecraft.network.play.server.S31PacketWindowProperty");
var S32PacketConfirmTransaction = Java.type("net.minecraft.network.play.server.S32PacketConfirmTransaction");
var S33PacketUpdateSign = Java.type("net.minecraft.network.play.server.S33PacketUpdateSign");
var S34PacketMaps = Java.type("net.minecraft.network.play.server.S34PacketMaps");
var S35PacketUpdateTileEntity = Java.type("net.minecraft.network.play.server.S35PacketUpdateTileEntity");
var S36PacketSignEditorOpen = Java.type("net.minecraft.network.play.server.S36PacketSignEditorOpen");
var S37PacketStatistics = Java.type("net.minecraft.network.play.server.S37PacketStatistics");
var S38PacketPlayerListItem = Java.type("net.minecraft.network.play.server.S38PacketPlayerListItem");
var S39PacketPlayerAbilities = Java.type("net.minecraft.network.play.server.S39PacketPlayerAbilities");
var S3APacketTabComplete = Java.type("net.minecraft.network.play.server.S3APacketTabComplete");
var S3BPacketScoreboardObjective = Java.type("net.minecraft.network.play.server.S3BPacketScoreboardObjective");
var S3CPacketUpdateScore = Java.type("net.minecraft.network.play.server.S3CPacketUpdateScore");
var S3DPacketDisplayScoreboard = Java.type("net.minecraft.network.play.server.S3DPacketDisplayScoreboard");
var S3EPacketTeams = Java.type("net.minecraft.network.play.server.S3EPacketTeams");
var S3FPacketCustomPayload = Java.type("net.minecraft.network.play.server.S3FPacketCustomPayload");
var S40PacketDisconnect = Java.type("net.minecraft.network.play.server.S40PacketDisconnect");
var S41PacketServerDifficulty = Java.type("net.minecraft.network.play.server.S41PacketServerDifficulty");
var S42PacketCombatEvent = Java.type("net.minecraft.network.play.server.S42PacketCombatEvent");
var S43PacketCamera = Java.type("net.minecraft.network.play.server.S43PacketCamera");
var S44PacketWorldBorder = Java.type("net.minecraft.network.play.server.S44PacketWorldBorder");
var S45PacketTitle = Java.type("net.minecraft.network.play.server.S45PacketTitle");
var S46PacketSetCompressionLevel = Java.type("net.minecraft.network.play.server.S46PacketSetCompressionLevel");
var S47PacketPlayerListHeaderFooter = Java.type("net.minecraft.network.play.server.S47PacketPlayerListHeaderFooter");
var S48PacketResourcePackSend = Java.type("net.minecraft.network.play.server.S48PacketResourcePackSend");
var S49PacketUpdateEntityNBT = Java.type("net.minecraft.network.play.server.S49PacketUpdateEntityNBT");

//Render
var Display = Java.type('org.lwjgl.opengl.Display')
var RenderManager = Java.type("net.minecraft.client.renderer.entity.RenderManager")
var GlStateManager = Java.type("net.minecraft.client.renderer.GlStateManager")
var OpenGlHelper = Java.type("net.minecraft.client.renderer.OpenGlHelper")
var RenderHelper = Java.type("net.minecraft.client.renderer.RenderHelper")
var GL11 = Java.type("org.lwjgl.opengl.GL11");

//Entities
var EntityPlayer = Java.type('net.minecraft.entity.player.EntityPlayer');
var EntityCreature = Java.type("net.minecraft.entity.EntityCreature");
var EntityAgeable = Java.type("net.minecraft.entity.EntityAgeable");
var EntityBodyHelper = Java.type("net.minecraft.entity.EntityBodyHelper");
var EntityFlying = Java.type("net.minecraft.entity.EntityFlying");
var EntityHanging = Java.type("net.minecraft.entity.EntityHanging");
var EntityLeashKnot = Java.type("net.minecraft.entity.EntityLeashKnot"); 
var EntityList = Java.type("net.minecraft.entity.EntityList");
var EntityEggInfo = Java.type("net.minecraft.entity.EntityList.EntityEggInfo");
var EntityLiving = Java.type("net.minecraft.entity.EntityLiving");
var EntityLivingBase = Java.type("net.minecraft.entity.EntityLivingBase"); //there's more but i'm too lazy :<

//Modules, removed


//utils
var RotationUtils = Java.type('net.ccbluex.liquidbounce.utils.RotationUtils')
var Rotation = Java.type('net.ccbluex.liquidbounce.utils.Rotation')
var CPSCounter = Java.type('net.ccbluex.liquidbounce.utils.CPSCounter')
var ClassUtils = Java.type('net.ccbluex.liquidbounce.utils.ClassUtils')
var ClientUtils = Java.type('net.ccbluex.liquidbounce.utils.ClientUtils')
var EntityUtils = Java.type('net.ccbluex.liquidbounce.utils.EntityUtils')
var InventoryUtils = Java.type('net.ccbluex.liquidbounce.utils.InventoryUtils')
var MinecraftInstance = Java.type('net.ccbluex.liquidbounce.utils.MinecraftInstance')
var MovementUtils = Java.type('net.ccbluex.liquidbounce.utils.MovementUtils')
var PathUtils = Java.type('net.ccbluex.liquidbounce.utils.PathUtils')
var RayCastUtils = Java.type('net.ccbluex.liquidbounce.utils.RayCastUtils')
var RollingArrayLongBuffer = Java.type('net.ccbluex.liquidbounce.utils.RollingArrayLongBuffer')
var ServerUtils = Java.type('net.ccbluex.liquidbounce.utils.ServerUtils')
var SettingUtils = Java.type('net.ccbluex.liquidbounce.utils.SettingUtils')
var TabUtils = Java.type('net.ccbluex.liquidbounce.utils.TabUtils')
var BlockPos = Java.type('net.minecraft.util.BlockPos');
var EnumFacing = Java.type('net.minecraft.util.EnumFacing');
var Vec3 = Java.type('net.minecraft.util.Vec3');
var ChatStyle = Java.type('net.minecraft.util.ChatStyle');
var MathHelper = Java.type('net.minecraft.util.MathHelper');

function airSpeed(speed) {
    mc.thePlayer.speedInAir = speed
}

function chatMessage(message) {
    mc.thePlayer.sendChatMessage(message)
}

function register(module) {
    moduleManager.registerModule(module)
}

function unregister(module) {
    moduleManager.unregisterModule(module)
}

function setTimer(timer) {
   mc.timer.timerSpeed = timer 
}

function moveX(x) {
    mc.thePlayer.motionX = x
}

function moveY(y) {
    mc.thePlayer.motionY = y
}

function moveZ(z) {
    mc.thePlayer.motionZ = z
}

function multiplyX(multiX) {
    mc.thePlayer.motionX *= multiX
}

function multiplyX(multiY) {
    mc.thePlayer.motionX *= multiY
}

function multiplyZ(multiZ) {
    mc.thePlayer.motionZ *= multiZ
}

function addX(addX) {
    mc.thePlayer.motionX += addX
}

function addY(addY) {
    mc.thePlayer.motionY += addY
}

function addZ(addZ) {
    mc.thePlayer.motionZ += addZ
}

function minusX(minusX) {
    mc.thePlayer.motionX -= minusX
}

function minusY(minusY) {
    mc.thePlayer.motionY -= minusY
}

function minusZ(minusZ) {
    mc.thePlayer.motionZ -= minusZ
}

function divideX(divideX) {
    mc.thePlayer.motionX /= divideX
}

function divideY(divideY) {
    mc.thePlayer.motionY /= divideY
}

function divideZ(divideZ) {
    mc.thePlayer.motionZ /= divideZ
}

function stateTrue(module) {
    module.setState(true)
}

function stateFalse(module) {
    module.setState(false)
}

function setTitle(title) {
    Display.setTitle(title)
}

function sendPacket(packet) {
    mc.thePlayer.sendQueue.addToSendQueue(packet)
}

function setTargetRotation(rot1, rot2, ticksStay) { // codes by scorpion3013
    var targetRotation = new Rotation(rot1, rot2)
    RotationUtils.setTargetRotation(targetRotation, ticksStay)
}

function getClosestEntity() { // codes by scorpion3013 too
	var filteredEntites = []
	for (var i in mc.theWorld.loadedEntityList){
		var entity = mc.theWorld.loadedEntityList[i]

		if (entity instanceof EntityPlayer && entity !=mc.thePlayer){
			filteredEntites.push(entity)
		}
	}
	filteredEntites.sort(function(a, b){
		var distanceA = mc.thePlayer.getDistanceToEntity(a)
		var distanceB = mc.thePlayer.getDistanceToEntity(b)

		return distanceB - distanceA;
	})
	return filteredEntites[filteredEntites.length - 1]
}
