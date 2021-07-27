const express = require('express');
const validate = require('express-validation');
const roleController = require('../controller/roles');
const {
    postRoleBodySchema,
    editRoleBodySchema
  } = require('../validation/joiRequestValidation');

const router = express.Router();

router.get('/', roleController.getAllRoles);

// GET => /role/id
router.get('/:id', roleController.getRole);

// POST => /role

router.post('/', validate(postRoleBodySchema), roleController.postRole);

// PUT => /role/id

router.put('/:id', validate(editRoleBodySchema), roleController.editRole);

// // DELETE => /role/id
router.delete('/:id', roleController.deleteRole);

module.exports = router;